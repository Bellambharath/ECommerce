using LoginApi.Data;
using LoginApi.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text.RegularExpressions;
using System.Text;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.Identity;

using Microsoft.AspNetCore.Authorization;


namespace LoginApi.Repository
{
    public class LoginRepository : ILoginRepository
    {
        private readonly LoginApiContext  _context;

        public LoginRepository(LoginApiContext context)
        {
            _context = context;
        }
        public Login AddUser(Login login)
        {
            _context.Login.Add(login);
            _context.SaveChanges();
            return login;
        }

        

        public int DeleteUser(Login login)
        {
            _context.Login.Remove(login);
            return _context.SaveChanges();
        }

       

        public int ForgotPassword(string forgot)
        {
            var check = _context.Login.Where(x => x.SecurityAnswer == forgot).FirstOrDefault();
            if (check != null)
            {
                return 1;
            }
            return 0;
        }

        public Login PasswordUpdate(Login Update)
        {
            Login newuser = _context.Login.Where(x => x.UserName == Update.UserName).FirstOrDefault();

            newuser.Password = Update.Password;
            _context.SaveChanges();
            return newuser;
        }

        public Profile ProfileDetails(string username)
        {
            Profile profile = new Profile();
            Login details = _context.Login.Where(x => x.UserName == username).First();
            profile.UserName=details.UserName;
            profile.Password=details.Password;
            profile.Email=details.Email;
            profile.FirstName=details.FirstName;
            profile.LastName=details.LastName;
            profile.SecurityAnswer = details.SecurityAnswer;
            profile.Password = "password";

            return profile;

        }
        public Profile UpdateProfileDetails(Profile profile)
        {
            Login l = _context.Login.Where(x => x.UserName == profile.UserName).First();
            l.FirstName=profile.FirstName;
            l.LastName=profile.LastName;
            l.SecurityAnswer=profile.SecurityAnswer;
            l.Email=profile.Email;
            _context.SaveChanges();
            return profile;

        }
    }
}
