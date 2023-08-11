using CartApi.Data;
using CartApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;

namespace CartApi.Repository
{
    public class CartRepository : ICartRepository
    {
        private readonly CartApiContext _context;

        public CartRepository(CartApiContext context)
        {
            _context = context;
        }
        public CartIO AddCart(CartIO cart)
        {
            Cart c = _context.Cart.Where(x => x.UserName == cart.UserName).FirstOrDefault();
            try
            {
                if (c != null)
                {
                    string[] productids = c.ProductId.Split(',');
                    string[] Quantity = c.Quantity.Split(',');
                    if (productids.Contains(cart.ProductId.ToString()))
                    {
                        int index = Array.IndexOf(productids, cart.ProductId.ToString());
                        int qty = int.Parse(Quantity[index]);
                        qty = qty + cart.Quantity;
                        Quantity[index] = qty.ToString();
                        c.Quantity = string.Join(",", Quantity);
                        _context.SaveChanges();
                        return cart;
                    }
                    else
                    {

                        c.ProductId += "," + cart.ProductId.ToString();
                        c.Quantity += "," + cart.Quantity.ToString();
                        _context.SaveChanges();
                        return cart;
                    }
                }
                else
                {
                    Cart cart2 = new Cart();
                    cart2.ProductId = cart.ProductId.ToString();
                    cart2.UserName = cart.UserName;
                    cart2.Quantity = cart.Quantity.ToString();
                    _context.Cart.Add(cart2);
                    _context.SaveChanges();
                    return cart;


                }
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }




        }

        public CartIO DeleteCart(string username,int id)
        {
            try
            {
                CartIO cartio = new CartIO();
                Cart c = _context.Cart.Where(x => x.UserName == username).First();
                string[] cart1 = c.ProductId.Split(',');
                string[] qty = c.Quantity.Split(',');
                int index = Array.IndexOf(cart1, id.ToString());

                if (index != -1)
                {
                    cart1 = cart1.Where((source, i) => i != index).ToArray();
                    qty = qty.Where((source, i) => i != index).ToArray();
                    if (cart1.Length == 0)
                    {
                        _context.Cart.Remove(c);

                    }
                    else
                    {
                        c.ProductId = string.Join(",", cart1);
                        c.Quantity = string.Join(",", qty);

                    }

                }

                _context.SaveChanges();
                cartio.CartId = c.CartId;
                cartio.UserName = c.UserName;
                cartio.ProductId = id;
                return cartio;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }

        }

        public List<CartIO> GetAllCarts()
        {
            try
            {
                List<CartIO> cartioList = new List<CartIO>();
                var c = _context.Cart.ToList();



                for (int i = 0; i < c.Count; i++)
                {
                    var cc = c[i].ProductId.Split(',');
                    var qty = c[i].Quantity.Split(',');
                    for (int j = 0; j < cc.Length; j++)
                    {
                        CartIO cart = new CartIO();
                        cart.ProductId = int.Parse(cc[j]);
                        cart.UserName = c[i].UserName;
                        cart.CartId = c[i].CartId;
                        cart.Quantity = int.Parse(qty[j]);
                        cartioList.Add(cart);
                    }

                }
                return cartioList;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public void UpdateQuantity(string username, int index, int value)
        {
            try
            {
                Cart c = _context.Cart.Where(x => x.UserName == username).First();

                string[] qty = c.Quantity.Split(',');
                int Quantityatindex = int.Parse(qty[index]);
                Quantityatindex += (value);
                qty[index] = Quantityatindex.ToString();
                c.Quantity = string.Join(",", qty);
                _context.SaveChanges();
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
            
        }
    }
}
