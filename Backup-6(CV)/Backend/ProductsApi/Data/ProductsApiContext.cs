using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProductsApi.Models;

namespace ProductsApi.Data
{
    public class ProductsApiContext : DbContext
    {
        public ProductsApiContext(DbContextOptions<ProductsApiContext> options)
            : base(options)
        {
        }

        public DbSet<ProductsApi.Models.Products> Products { get; set; } = default!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Products>().HasData(

                 new Products
                 {
                     ProductId = 1,
                     ProductCategory = "Electronics",
                     ProductDescription = "Boult Audio ZCharge Bluetooth Wireless in Ear Earphones with Mic, 40H Playtime and Super Fast Charging, Environmental Noise Cancellation for Pro+ Calling and IPX5 Water Resistant (Black)",
                     ProductName = "Hearphones",
                     ProductPrice = 2500,
                     Noofstocks = 19,
                     ProductRating = 1,
                     Imageurl = "https://m.media-amazon.com/images/I/61FxtMZu7lL._AC_UY327_FMwebp_QL65_.jpg",
                     SellerName = "Appario Retail Private Ltd"
                 },
                 new Products
                 {
                     ProductId = 2,
                     ProductCategory = "Fashion",
                     ProductDescription = "White solid casual shirt, has a mandarin collar, a button placket, 1 pocket, long sleeves with roll-up tab features, curved hem",
                     ProductName = "Men White Slim Fit Casual Shirt",
                     ProductPrice = 549,
                     Noofstocks = 9,
                     ProductRating = 2.5,

                     Imageurl = "https://m.media-amazon.com/images/I/51+Tdu4vtgL._UX679_.jpg",
                     SellerName = "Maruti Enterprises"

                 },
                 new Products
                 {
                     ProductId = 3,
                     ProductCategory = "Electronics",
                     ProductDescription = "realme 10 Pro+ 5G (Nebula Blue, 128 GB) (8 GB RAM)",
                     ProductName = "Realme 10Pro",
                     ProductPrice = 15000,
                     Noofstocks = 9,
                     ProductRating = 3,
                     Imageurl = "https://tse4.mm.bing.net/th/id/OIP.cg2VMYhsCeKUvE3tp-Dm5AHaOx?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                     SellerName ="Oppo Mobiles India Private Limited"
                 },
                  new Products
                  {
                      ProductId = 4,
                      ProductCategory = "Home & Kitchen",
                      ProductDescription = "Vinod Bullet Stainless Steel Flask, Double Wall Insulated Steel Flask with Jacket, Hot & Cold Water Bottle 1000 ml, Silver",
                      ProductName = "Flask",
                      ProductPrice = 789,
                      Noofstocks = 9,
                      ProductRating = 4.2,
                      Imageurl = "https://m.media-amazon.com/images/I/612x7+YtEBL._AC_UL480_QL65_.jpg",
                      SellerName = "Vinod Cookware"

                  },
                   new Products
                   {
                       ProductId = 5,
                       ProductCategory = "Books",
                       ProductDescription = "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living",
                       ProductName = "Life's Amazing Secrets",
                       ProductPrice = 496,
                       Noofstocks = 8,
                       ProductRating = 5,
                       Imageurl = "https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL900_SR900,600_.jpg",
                       SellerName = "Penguin Ananda (8 October 2018)"
                   },
                new Products
                {
                    ProductId = 6,
                    ProductCategory = "Watches",
                    ProductDescription = "Diesel watches reflect the confident, assertive nature of the brand itself. Bold and strong, our timepieces will blend seamlessly with any outfit you wear, throughout the year.",
                    ProductName = "Analog Black Dial Men's Watch-DZ4283",
                    ProductPrice = 19495,
                    Noofstocks = 12,
                    ProductRating = 0,
                    Imageurl = "https://m.media-amazon.com/images/I/71TamRUO01L._UY879_.jpg",
                    SellerName = "Vee Ess Sales Pvt Ltd"


                },

                new Products
                {
                    ProductId = 7,
                    ProductCategory = "Perfume",
                    ProductDescription = "Men Natural Gas-Free Long-Lasting Body Spray - 70ml",
                    ProductName = "Envy",
                    ProductPrice = 185,
                    Noofstocks = 9,
                    ProductRating = 0,
                    Imageurl = " https://tse2.mm.bing.net/th/id/OIP.JDLpwKpZ6fT29FDruRiqTwHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    SellerName = "Vini Cosmetics"

                },

                new Products
                {
                    ProductId = 8,
                    ProductCategory = "Bags",
                    ProductDescription = "Earth-friendly, and a dependable everyday companion, the Dell Pro Slim Backpack 15 (PO1520PS) provides quality protection for your devices.",
                    ProductName = "Dell Pro Slim Backpack 15 | PO1520PS",
                    ProductPrice = 3999,
                    Noofstocks = 9,
                    ProductRating = 4.2,
                    Imageurl = "https://tse1.mm.bing.net/th/id/OIP.uvbeZacQbUB-DrnqR-koCgHaLH?pid=ImgDet&rs=1",
                    SellerName = "Cannycom Store"

                },
                new Products
                {
                    ProductId = 9,
                    ProductCategory = "HeadPhones",
                    ProductDescription = "Experience exceptional audio clarity with this Teams certified wired headset that allows you to wear the microphone on either side for a customized fit.",
                    ProductName = "Dell Pro Stereo Headset | WH3022",
                    ProductPrice = 2500,
                    Noofstocks = 9,
                    ProductRating = 4.2,
                    Imageurl = "https://snpi.dell.com/snp/images/products/large/520-AAUL_MVI4.jpg",
                    SellerName = "gadgets storm"

                },

                new Products
                {
                    ProductId = 10,
                    ProductCategory = "Monitors",
                    ProductDescription = "Feature Height Adjustment, Anti Glare Screen, Pivot Adjustment, USB Hub, High Dynamic Range, Feature\tHeight Adjustment, Anti Glare Screen, Pivot Adjustment, USB Hub, High Dynamic Range",
                    ProductName = "Dell 27 QHD Monitor (USB-C) | S2722DC",
                    ProductPrice = 15999,
                    Noofstocks = 9,
                    ProductRating = 4.2,
                    Imageurl = "amazon.com/images/I/716SnsvjetL._AC_UY327_FMwebp_QL65_.jpg",
                    SellerName = "BenQ, BenQ Corporation 16 Jihu Road, Neihu 114, Taipei, Taiwan"

                },
                new Products
                {
                    ProductId = 11,
                    ProductCategory = "Watches",
                    ProductDescription = "Case style: Analog watch with a stainless steel circular case Dial style: Black dial with silver hands Strap style: Stainless steel strap with a butterfly clasp for comfort and style Features: Branding in silver at twelve hour mark and Roman numeral marks through out rest of dial Screw to reset time",
                    ProductName = "Titan Women Black Dial Watch",
                    ProductPrice = 3165,
                    Noofstocks = 10,
                    ProductRating = 4.0,
                    Imageurl = "https://img3.junaroad.com/uiproducts/13844456/zoom_1-1499510462.jpg",
                    SellerName = "VRP Telematics"
                }
               );







        }
    }
}
