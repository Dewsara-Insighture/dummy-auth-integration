import { Button, Grid, Stack, Box, TextField , FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import { useEffect , useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { memberType } from '../../types/member.types';
import { AuthService } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { getUserAccessToken } from '../../utils/getUserToken';
import { getRoleResponseType } from '../../types/roles.types';



export default function InviteMembers() {
  const navigate = useNavigate();
  const [roles , setRoles] = useState<getRoleResponseType[] | null>();
  const [members , setMembers] = useState<{email : string , orgRoleIds:string[]}[] | null>([]);
  const { control, handleSubmit } = useForm<memberType>({
    defaultValues: {
      email: '',
      role: [],
    },
  });

  const handleInviteMembers = async () => {
    try{
      const accessToken = await getUserAccessToken();
      const inviteUserRes = await AuthService.post('/users/invite',members , {headers : {
        'x-organization-id' : 'org_d1457da7-f3bc-452b-9c82-bcb1685f7617',
        Authorization : `Bearer ${accessToken}`
      }});
      console.log('inviteUserRes: - ' , inviteUserRes);
      if(inviteUserRes.status === 200){
        
        navigate('/dashboard');
      }
    }catch(error){
      console.log('Invite User error :- ' , error)
    }
  }
  const onSubmit: SubmitHandler<memberType> = async (data) => {
    console.log('Data :- ' , data)
      const postInviteUserData = {
        email : data.email,
        orgRoleIds : data.role
      };

      setMembers((prevMembers) => (prevMembers ? [...prevMembers, postInviteUserData] : [postInviteUserData]));
  };

  useEffect(() => {
    console.log('Get Roles Use Effect hit');
    const getRoles = async () => {
      try{
        const getRolesRes = await AuthService.get('/roles/', );
        console.log('Get Roles Res: - ' , getRolesRes);
        if(getRolesRes.status === 200){
          setRoles(getRolesRes.data.data);
        }else{
          setRoles(null);
        }
      }catch(error){
        console.log('Get Roles error :- ' , error)
      }
    }

    getRoles();

  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100vh' }}
    >
      <Box sx={{ height: 'auto', p: '30px' }}>
        <Stack direction="column" alignItems="center">
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontWeight: 700, fontSize: '30px', marginBottom: 0 }}>
              Invite Members
            </p>
          </div>

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="standard-basic"
                label="Email"
                variant="standard"
                type="email"
                fullWidth
              />
            )}
          />
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <FormControl sx={{width : '50%'}}>
              <InputLabel id="role">Roles</InputLabel>
              <Select
                {...field}
                labelId="role"
                label="role"
                multiple
                defaultValue={[]}
              >
                {roles && roles.length>0 && roles.map((role) => (
                  <MenuItem value={role.id} key={role.id}>
                    {role.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            )}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: '20px' }}
            onClick={handleSubmit(onSubmit)}
            fullWidth
          >
            Add
          </Button>
        </Stack>
        {members?.length !== 0 && (members || []).map((member) =><div>{JSON.stringify(member)}</div>)}
        <Button onClick = {() => handleInviteMembers()} sx={{ mt: '20px' }}  variant="contained" fullWidth>Invite Members</Button>
      </Box>
    </Grid>
  );
}

