import { useAppSelector } from '../../../store/hooks';
import { useSendLogoutMutation } from '../../../store/slices/api/templateApi';
import { selectUser } from '../../../store/slices/authSlice';
import LagniappeLogo from '../../../assets/crawfish-logo.svg';
import SignOut from '../../../assets/sign-out-icon.svg';
import { NavContainer, NavItem } from '../Layout.styled';
import PhoneIcon from '../../../assets/phone-icon.svg';
import {
  ButtonGroup,
  NavButton,
  Logo,
  LogoutButton,
  SignOutIcon,
  Text,
} from './NavBar.styled';

const PrivateNav = () => {
  const user = useAppSelector(selectUser);
  const [sendLogout] = useSendLogoutMutation();

  return (
    <div style={{ backgroundColor: '#353535' }}>
      <NavContainer>
        <Logo src={LagniappeLogo} />

        <ButtonGroup>
          <NavItem to='/'>
            <NavButton>Order History</NavButton>
          </NavItem>

          <NavItem to='/products'>
            <NavButton>Products</NavButton>
          </NavItem>

          <NavItem to='/current-order'>
            <NavButton>Current Order</NavButton>
          </NavItem>

          {user?.admin && (
            <NavItem to='/admin'>
              <NavButton>Admin</NavButton>
            </NavItem>
          )}
        </ButtonGroup>
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={PhoneIcon} height={18} />
            <span style={{ color: 'white', marginLeft: '8px' }}>
              973-674-0498
            </span>
          </div>
          <LogoutButton onClick={() => sendLogout()}>
            <SignOutIcon src={SignOut} />
            <Text>Log Out</Text>
          </LogoutButton>
        </div>
      </NavContainer>
    </div>
  );
};

export default PrivateNav;
