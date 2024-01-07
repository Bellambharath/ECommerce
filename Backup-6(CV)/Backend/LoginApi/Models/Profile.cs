namespace LoginApi.Models
{
    public class Profile
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string SecurityAnswer { get; set; }
    }
}
