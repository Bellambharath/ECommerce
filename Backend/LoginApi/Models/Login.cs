namespace LoginApi.Models
{
    public class Login
    {
        public int LoginId { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public string SecurityAnswer { get; set; }
        public string Role { get; set; }

    }
}
