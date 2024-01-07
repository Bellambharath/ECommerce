using Addresses_Api.Data;
using Addresses_Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Addresses_Api.Repository
{
    public class AddressRepo : IAddressRepo
    {
        private readonly Addresses_ApiContext _context;

        public AddressRepo(Addresses_ApiContext context)
        {
            _context = context;
        }
        
        public async Task<Address>  AddAddress(Address AddressDetails)
        {
            try
            {
                _context.Address.Add(AddressDetails);
                await _context.SaveChangesAsync();
                return AddressDetails;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }

        }

        public async Task<bool> DeleteAddress(int Addressid)
        {
            Address a=_context.Address.Where(x=>x.AddressId==Addressid).First();
            try
            {
                if (a != null)
                {
                    _context.Address.Remove(a);
                    await _context.SaveChangesAsync();
                    return true;
                }
                return false;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public async Task<Address> EditAddress(Address AddressDetails)
        {
            Address a = _context.Address.Where(x => x.AddressId == AddressDetails.AddressId).First();
            try
            {
                a.Area = AddressDetails.Area;
                a.Country = AddressDetails.Country;
                a.FullName = AddressDetails.FullName;
                a.MobileNo = AddressDetails.MobileNo;
                a.Pincode = AddressDetails.Pincode;
                a.HouseNo = AddressDetails.HouseNo;
                a.LandMark = AddressDetails.LandMark;
                a.City = AddressDetails.City;
                a.State = AddressDetails.State;
                a.IsDefault = AddressDetails.IsDefault;

                await _context.SaveChangesAsync();
                return a;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public  List<Address> GetAddress()
        {

            List<Address> address = _context.Address.ToList();
            
            address = address.OrderBy(x => x.IsDefault).ToList();

            address.Reverse();
            return  address.ToList();
        }

        public async Task<bool> UpdateDefaultAddress(int Oldid, int Newid)
        {
            try
            {
                Address Previous = _context.Address.Where(x => x.AddressId == Oldid).First();
                Previous.IsDefault = false;
                Address New = _context.Address.Where(x => x.AddressId == Newid).First();
                New.IsDefault = true;
                await _context.SaveChangesAsync();
                return true;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
