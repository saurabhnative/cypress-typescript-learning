import { UserProfileType } from '../models/userData.interface';
interface UserProfileProps { userProfile: UserProfileType, key: number }
const UserProfile: React.FC<UserProfileProps> = ({ userProfile }) => {
  return (
    <div
      className="bg-white rounded-lg p-6 border border-solid border-gray-100 w-9/12 m-2 shadow-2xl text-gray-500 userProfileCard"
    >
      <div>Name: {userProfile.name}</div>
      <div>Email: {userProfile.email}</div>
      <div>Website: {userProfile.website}</div>
    </div>
  );
}

export default UserProfile;
