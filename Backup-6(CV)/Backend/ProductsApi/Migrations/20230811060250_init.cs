using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductsApi.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductCategory = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductPrice = table.Column<int>(type: "int", nullable: false),
                    Noofstocks = table.Column<int>(type: "int", nullable: false),
                    Imageurl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductRating = table.Column<double>(type: "float", nullable: false),
                    SellerName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductId);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "Imageurl", "Noofstocks", "ProductCategory", "ProductDescription", "ProductName", "ProductPrice", "ProductRating", "SellerName" },
                values: new object[,]
                {
                    { 1, "https://m.media-amazon.com/images/I/61FxtMZu7lL._AC_UY327_FMwebp_QL65_.jpg", 19, "Electronics", "Boult Audio ZCharge Bluetooth Wireless in Ear Earphones with Mic, 40H Playtime and Super Fast Charging, Environmental Noise Cancellation for Pro+ Calling and IPX5 Water Resistant (Black)", "Hearphones", 2500, 1.0, "Appario Retail Private Ltd" },
                    { 2, "https://m.media-amazon.com/images/I/51+Tdu4vtgL._UX679_.jpg", 9, "Fashion", "White solid casual shirt, has a mandarin collar, a button placket, 1 pocket, long sleeves with roll-up tab features, curved hem", "Men White Slim Fit Casual Shirt", 549, 2.5, "Maruti Enterprises" },
                    { 3, "https://tse4.mm.bing.net/th/id/OIP.cg2VMYhsCeKUvE3tp-Dm5AHaOx?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", 9, "Electronics", "realme 10 Pro+ 5G (Nebula Blue, 128 GB) (8 GB RAM)", "Realme 10Pro", 15000, 3.0, "Oppo Mobiles India Private Limited" },
                    { 4, "https://m.media-amazon.com/images/I/612x7+YtEBL._AC_UL480_QL65_.jpg", 9, "Home & Kitchen", "Vinod Bullet Stainless Steel Flask, Double Wall Insulated Steel Flask with Jacket, Hot & Cold Water Bottle 1000 ml, Silver", "Flask", 789, 4.2000000000000002, "Vinod Cookware" },
                    { 5, "https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL900_SR900,600_.jpg", 8, "Books", "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living", "Life's Amazing Secrets", 496, 5.0, "Penguin Ananda (8 October 2018)" },
                    { 6, "https://m.media-amazon.com/images/I/71TamRUO01L._UY879_.jpg", 12, "Watches", "Diesel watches reflect the confident, assertive nature of the brand itself. Bold and strong, our timepieces will blend seamlessly with any outfit you wear, throughout the year.", "Analog Black Dial Men's Watch-DZ4283", 19495, 0.0, "Vee Ess Sales Pvt Ltd" },
                    { 7, " https://tse2.mm.bing.net/th/id/OIP.JDLpwKpZ6fT29FDruRiqTwHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7", 9, "Perfume", "Men Natural Gas-Free Long-Lasting Body Spray - 70ml", "Envy", 185, 0.0, "Vini Cosmetics" },
                    { 8, "https://tse1.mm.bing.net/th/id/OIP.uvbeZacQbUB-DrnqR-koCgHaLH?pid=ImgDet&rs=1", 9, "Bags", "Earth-friendly, and a dependable everyday companion, the Dell Pro Slim Backpack 15 (PO1520PS) provides quality protection for your devices.", "Dell Pro Slim Backpack 15 | PO1520PS", 3999, 4.2000000000000002, "Cannycom Store" },
                    { 9, "https://snpi.dell.com/snp/images/products/large/520-AAUL_MVI4.jpg", 9, "HeadPhones", "Experience exceptional audio clarity with this Teams certified wired headset that allows you to wear the microphone on either side for a customized fit.", "Dell Pro Stereo Headset | WH3022", 2500, 4.2000000000000002, "gadgets storm" },
                    { 10, "amazon.com/images/I/716SnsvjetL._AC_UY327_FMwebp_QL65_.jpg", 9, "Monitors", "Feature Height Adjustment, Anti Glare Screen, Pivot Adjustment, USB Hub, High Dynamic Range, Feature	Height Adjustment, Anti Glare Screen, Pivot Adjustment, USB Hub, High Dynamic Range", "Dell 27 QHD Monitor (USB-C) | S2722DC", 15999, 4.2000000000000002, "BenQ, BenQ Corporation 16 Jihu Road, Neihu 114, Taipei, Taiwan" },
                    { 11, "https://img3.junaroad.com/uiproducts/13844456/zoom_1-1499510462.jpg", 10, "Watches", "Case style: Analog watch with a stainless steel circular case Dial style: Black dial with silver hands Strap style: Stainless steel strap with a butterfly clasp for comfort and style Features: Branding in silver at twelve hour mark and Roman numeral marks through out rest of dial Screw to reset time", "Titan Women Black Dial Watch", 3165, 4.0, "VRP Telematics" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
