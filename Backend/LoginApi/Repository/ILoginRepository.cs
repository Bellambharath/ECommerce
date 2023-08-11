using LoginApi.Models;
using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption.ConfigurationModel;

namespace LoginApi.Repository
{
    public interface ILoginRepository
    {

        Profile ProfileDetails(string username);
        int ForgotPassword(string forgot);
        Login PasswordUpdate(Login Update);

        Profile UpdateProfileDetails(Profile profile);
    }
}
