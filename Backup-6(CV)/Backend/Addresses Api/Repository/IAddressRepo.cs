using Addresses_Api.Models;

namespace Addresses_Api.Repository
{
    public interface IAddressRepo
    {
        List<Address> GetAddress();
        Task<Address> AddAddress(Address AddressDetails);
        Task<Address> EditAddress(Address AddressDetails);
        Task<bool> DeleteAddress(int Addressid);
        Task<bool> UpdateDefaultAddress(int Oldid,int Newid);

    }
}
