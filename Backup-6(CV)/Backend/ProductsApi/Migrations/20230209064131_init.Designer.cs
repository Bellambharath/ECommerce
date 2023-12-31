﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ProductsApi.Data;

#nullable disable

namespace ProductsApi.Migrations
{
    [DbContext(typeof(ProductsApiContext))]
    [Migration("20230209064131_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ProductsApi.Models.Products", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProductId"), 1L, 1);

                    b.Property<string>("Imageurl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Noofstocks")
                        .HasColumnType("int");

                    b.Property<string>("ProductCategory")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProductDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProductPrice")
                        .HasColumnType("int");

                    b.Property<double>("ProductRating")
                        .HasColumnType("float");

                    b.Property<string>("SellerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ProductId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            ProductId = 1,
                            Imageurl = "data:image / jpeg; base64,/ 9j / 4AAQSkZJRgABAQAAAQABAAD / 2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP / 2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz / wAARCAD + AP4DASIAAhEBAxEB / 8QAHAABAAEFAQEAAAAAAAAAAAAAAAcCAwQFBgEI / 8QAShAAAgEDAgMFAwkFBQYEBwAAAQIDAAQRBSEGEjETQVFhcRQigQcjMkJSgpGhsUNyksHRFTNiovAkNFNjk + EXJWSyNURUdYOzwv / EABYBAQEBAAAAAAAAAAAAAAAAAAABAv / EABgRAQEBAQEAAAAAAAAAAAAAAAABAhFB / 9oADAMBAAIRAxEAPwCW6UpQKUpQKUpQKUpQKUpQKUpQKUpQKVj3l7Y6fA91e3MNvbp9KSd1Rc4JCjPUnuA3qPtZ + U2CPnh0W17RjkLdXwZUPUZjt1POfLJX0oJJrT3vE / C2nsUutWs1kGeaON + 3lUjuKQBm / KoT1HXuI9ZLe331xJGSPmmYRW48MQQ4X8RmtcIj0LkeSAKP60ExTfKRwpGxEaalOB0aG2VVP / XdD + VYn / ifoedtO1PGdifZRt / 1Kins4u / J9Wb + teiOAdw + BP8AWgl2H5SuFpCokh1OEnqZIInUf9KRj + Vb6x4n4X1Fglpqlq0hwFjlYwSsT3Kk4Vj8BUCdnF3Fh6Mf / wCs14Ym + qwYeDD / AEPyoPpSlQLpPFXEeiMiwXTtbj / 5W75prdgO5ATzL91hUpcO8Z6RrpS3f / Y9RI / 3aZwyzEbn2eXYN6YB8sDNB1FKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKVauLi3tYZ7m5ljhggRpJZZWCoiDclmO1BdriOJOP9O0ppbTTBFe3yHkkkLE2du / 2WZDl3 / wqfUgjB5Xirju61RpdP0hpYNPIKySe9HcXanY85G6Rn7PUjrgErXEhUjwX3cDAAAAUeAA2AoMvUNR1fWLg3V / dTTSb8rSkfNqfqwxj3FHoPWsXESZP1u85yT6satvKzbDp4DpVPKx6mguGbGyj / XrVJeUmnKB3V7QU + 99o16B0940oSqjLEAeJIA / Og9wftGqhzjoc1SjB9o8yHwiBc / 5AavdjdYz7NdAeJtpwPx5KDwSHAVxlfA0wVIaMkgENgEhlI3DKRvt3VTzIDyswB + y3un8DvVfKRuu36UEj8LcfEdjYa9NmM8sdvqL9VPQJefyf + L7RktWVgCpBBAII3BB3BBFfNXNhjsMdHFdhwtxjd6C0dleGS40cn3Bu01mD9aHO5XxX4jwYJmpVm2uba8ggubaaOa3nQSRSxnmR1PeCKvUClKUClKUClKUClKUClKUClKUClKtzTQW8U088iRQwxvLNJIQqRxoCzMxPcKC3d3lnYW1xd3cyQ21unaTSyH3UXp0G5J6AAZJOBuahXiniu / 4juTBDzwaZA + YbdsDcdJrnBwZPBdwvmdy4s4pueIrvsYGeHS7VuaBGBU / Z9olH2yM8g + qD4sa5csAvJGOVB + JPiaCouqAiP1LHcsfjVvBY16F8arAFBSFAqqlbPRtB1viCZotMtw0cbclxdzEpaQHrhnxkt / hUE + nWg1TMFBLEADvJAA + NbrSOFuJ9cCPY2LJavjF5ek29vg96cwLsP3UPrUoaDwBoGkdlcXS / 2lqCYbt7tB2MT / 8AIt90HkTzHzrsMUEc6d8l2nxhX1bUbm6fYtDZgWsAPgW96U / xLXVWXCXCNhg22jWPOP2k8QuJc + PaXHM351vKUFCRxRKFjREUbBUUKB6BRVdKUFie0srpStzbW86nIKzxRyD8HBrnb / gThO9DGO0NlKc4k09zEAfOI5i / y11NKCC + KeEr / htobgzC6sLmQxLOsZjaOXGQky5I3GeUg74PTv5 + M5HKe7df6V9Datplrq + nXunXI + auojHzAZMb / SSRfNTgj0r56uLe5sLq6tLheW5s55IJgOnPG3KSD4HqPI0HS8McT3nDtxytzz6VO / Nc2wwWRjsZrfOwbxHRvI7iZrO8tL + 2gu7SZJre4TnikTow6YwdwR0IO4Ix3V8 + phlOPAMPQ10XCvEc3D952c7M2k3Tj2tDkiBzhRcxjy + uO8eajITRSqVZXVXRlZGAZWUgqykZBBG2KqoFKUoFKUoFKUoFKUoFKUoFRHx3xS + o3D6Lp0q + w275u5VPuXE8bbk + McZ2A + sw8EBPUcd8RtpdoumWUhXUdQjPM6H3ra0JKM4PczbqnxPVd4XmYRN2O2TgsR0bGwUeAUbAf1oPWcY5EzyAk5O7Ox6s58a8Ud9UgVcHhQVDpXjOqAsxAAGSTXmTlVAZmZlRFUFmZmOAqqNyT3VK3BvAiWht9X1yJXvgRLZ2TgNHZnuklHQy + HcvruoaThf5P7rUhFf66stvp7YeGyBaO6ul680xHvIh8PpH / D3yzbW1rZwQ21rDFBbwqEiihRUjRR3Kq7VepQKUpQKUpQKUpQKUpQKiH5TNMW11az1ONQE1OAxz4 / 8AqbYBcn1Ur / Cal6uP + UWyF1w1dTY9 / Tri2vV235efsH39GJPpQRFatnlB7iV + B3FZTJnurXW7lWIAydj4dD3mtuMHP4kd4zVEg / J / rTTQS6JcvmS0QzWJY7ta5AaP7hIx5MPs13lQVYXk2mX1lqEOS9pMspUftI91kj + 8pIqcYZYp4oZ4m5opo0ljYdGR1DA1BcpSlApSlApSlApSlArD1PUbXSrC81C6JENrEZGA + k7E8qRp5sSFHrWZUU / KDrRvb + HRLd82 + nsst2VPuveOuy5H / DU7 + bHvSg47UtRub66vtUvCDc3UpcgElUOOVY0zvyqMKPTzrTkZJLbluuavTv2shAx2cfur5kd9WsGgKeX07vGqi6AEk7fn + FU4rp + CdAn1vWreQl47LSpYL26lQkEyo / PDCjDvYjJ8AD4ig7Xgbgz2BYNa1eL / AMxdeaztpB / uMbD6bg / tSOv2Rt1ziQqb0oFKUoFKUoFKUoFKUoFKUoFYOrwe06Vq9vyI5msLuNVkQOhYxNy8ytsd8VnUwDsdwdj6UHzRbH3o / NP5ZrdoOZIyevKpBHUbVpUXs5in2JJI / wCEla3cP93H + 7VFQz0PwPcalLgi8NzoqW7Nl9PmktOu / ZbSx / gDj7tRiBnY43rseAp2iv8AUbQkclxaJOuSc88D8p / JvyoJEpSlQKUpQKUpQKUpQazXdVj0XSr / AFFwGaCLEEZ / a3DkJFH1B3JGfLPhUB3E0xWeeaQvcXMkjPI5953kYvJISfEk / jXe / KTqrT3lho0JLJaKLu6Vcf7xKpWJTnvVcn74qOZrhTOgCuAnzcauuCSNmyOlBQFAAA6ePj50xVZiTcxt2TdSpHNEx9OoqklkIEq8hPRs5jb0YbUHscU80sMEEZknnkjhgiX6UksjBVUepr6A4a0ODh / SbTT0KtMMzXsqjHb3UgHO / p0VfICo / wDk10MXV5ca7cIDDYlraxz0a6dfnJR + 4DyjzY + FSzQKUpQKUpQKUpQKUpQKUpQKUpQKUpkDc7Abk + VB82y49uusdPa7oj07V628P93H + 7WlibtJi / 23kk / iJb + dbuLZIx / hH6VRfWt7wtL2Ov6Ue6U3EB +/ C5H5gVolraaISusaI3hqFsP4m5P50Ev0pSoFKUoFKUoFW5pYoIpp5mCRQxvLK56KiKWZj6Crlcpx9fmy4duokJEmpSxaeuDg8j5kl + HKrD40ES3t9Lf3eqarNkPczS3AXOeUyHEaDP2Ryj4VgKmFUHBI3yftHqavSD3baP7bGdx / hXZaEeVBa5apXtpJ7ezhUvPdulvDGRtJJM3Zqv4mrxFdf8n2l + 26417IuYdJhMqkgEe0zhoo + veBzn8KCT9F0u30bS9O02DBW1gVGYDHaSn3pJD + 8ST8a2NKUClKUClKUClKUClKUClKUClKUCsHWLj2XSdaus49n069nHdukLMKzq0fFaxvoGqQyZ5bhYLdgCVLLJMisuRvuM5oIFtR7wH2UC / HpW9XYAeAA / Cuw4Z4e0Gd7rtdNtZFZ44gZYy7ABSzYZjkHfrmqta4IurXtLnR + e4gGWa0c5uYx1 + aY / SHkd / 3qo5Na2Wkb6rov / 3Gy / 8A3Ka1i5BIIIZSVYMCGVhsQQd8jvrbaCpfWtDX / wBdG / 8AArSfyoJepSlQKUpQKUpQKiz5S7wy6lpGnqci1tHunAP7S6k7NQR4gIf4vOpTqHddsNd1ninV5rbTbuWJbv2eJgEVClnGsRKmRgMZDH40HLMA082OkYSFfujJpg1X2NzAE9pgmgkn5plWeNozIrEkMnMMEeYzTAqijAqXuANPFnoEFwy4l1OWS9YkYPZn5uIH7oB + 9UTJC88kVvGCZLiWO3jx9uVxGP1r6BtoIrW3traIYjt4YoIx4LGoQfpQXaUpUClKUClKUClKUClKtyzQW8bTTyxxRIMvJM6xoo82YgUFylR9rPymaZaSPBpFqb91903Ekhhteb / lgKXb8FHgSK5e8 + UviycAW62NljPvQQGVz6m4LL / loJppUIW3ykcZwH56Wyuh / wCotUU / jblK3dp8rEgaNdQ0hGXYSSWNwQw8Sscy4 + HafGglSuY4zuYYNOs0lljiEt8g5pXVFPJFI + Mttnp + Fc5J8rGmhiIdGvnXOxlngjJHmF5v1rleLuLY + JzpiQ201tDZrO7xzOjF5pSF5gUOMADbb6x + ISPwfJaSwydjc20rh5ZJEhmjkdMkRqWCMSM48K62vnbT5Z7Nop7eWSGdDzJLCxSRT34Zd6kfQuPgezttbXHRVvoE2z / z4l6eqj4DrQdJrfDOm6wGmA9nvwuFuY1Hv46CdfrD8 / PuPL6DpGpafxNYwXkPL2MV5cJIuWhlVY + yDRvj / EMjYjwqQ4pYZ445oJElikUNHJEyujqe9WXYiq++gUpSgUpSgUpVLMiKzuyqqKWZmICqoGSSTtigqrkrVpY4NVvypDiz1C4jOOs07syBfM5wKxdX + Unh3T3eKySXUZlJUtARHbcw2wJWBJ + CkedRLLdzXKyPcNLI0g5QZpHZwM55lJO3lQT9Pa6NFptrZ6oLI2kUENuBfGIREogTYy7ZqONW0z5P3mddJ4jtbWfmI7C4aWeyJz0W4AJA8 + dh5Vws9xeX8itczSTuiLHGZneQpGgwFUyEnAq5Ha5xnNB1XD2ngcUaJbS3FjKIrlrnns7uG4hfsI2deVkPjy7EA + VTNXzp7EuQcdCCPIjcEV0Wk8V8UaPKnNcy39mMdpa30jOeUbfNTsC6nw6jy8KJppWl0PiTRtei5rSUpcovNPaT4W5h7slc4K / 4gSPjsN1UClKUClKUCmaVwvGvF6aZFLpWmT51SYcs8sZz7DEw8enaH6o7uu23MGbxPxrpmhJNbWzR3erAYW3UkxQMejXLKdsdeUHJ8geYRFe3uq65M91qF5LcS5JHatiOIdcRxj3FHoBVUdnG0byyP4u7sckknJJJ3JNYjRBQ77rHnfPhnbOKDFK7kA5x3jp8K8PMayRGXOQpVe4d / qaqMIHdQYJU99UkYrKdQvXHn6VjtMiHEa8zE4B3O / gBQVpFI2DjA8W2 / LrVwQRqQWkAIOe7f8TWVp + hcQ6w5WCF + QbOx2Rf3jkKPi2fKukh4C0yAA6rrUcb98duAxH3m5R + RoOeSWLb8MqQayEwd0YNjqBswHmK6NeEuDRzi213UIpGRoywEDqVcYIZSP5 / 1rX3fCOt2SG40 + 5j1e2jBdvZgUvo1G + ewJPN91ifKqL + ja / qmiyc1pLmBiWltpiTbyZ6tgdG8x8c9KmDTbw6hYWN8YXh9rt45xFIQzIHGQCR + I2qENItW1u9sLKH6V1Mkc5XutwSZZQO7ABBHjjx2niNEjRI41CpGqoijoqqMACoKqUpQKUpQUuyIju7KqIpd2chVVVGSWJ2wKhXjLjK612eTTNMd00pHK5XKvfMu / ay / wDL2yi / E74EfUfKVr7WlpHotu + JbtBNelTutvzYSL75BJ8h4NUO7swH2jQZUCg + 8NxnJJ78dTV2TpzMGBPTbAr2FcnkRcsOVeoA8cZNXrqJ07NHMRfv5C2fxO1AtocgN57EdxrZwoGHQBhs3h6isaGN0AZe8bgjqPh1 / Wrk93DaRdu3gVC53Ynu / nVGcI1xviqWjXFctNq95KxPOVXOQF6fj1q5DqtwCOZ8 + tBvQk0E0VzbSyQXMLc8M0J5ZI28VP6jv + NSnwnxVHrUfsV4Ui1aCPmdVHLHdRrsZoR / 7l7s + B2iS3v45gAdm86y0aeKaC5tZWhubeQTQTJ9KN16H07iO8ZHfQT3StNw7rlvr2nx3KFFuoiIb + BT / c3AG + M78rdUPh5g43NQKUq3PNDbQzXE7rHDBG800jfRSNFLMx9BQc3xjxJ / YNgsdsynU74PHZggN2KjZ7hgdvdyOXPUkdQDiJIbZXDy3Ds7uzSSyOSzMzEszOTuSeprK1rVbjiHV7rUcMsORDZxt1jto88gIz1OSzebGrHatKUhVcEH50 / a8F / n + FBbKAB3ZyttFlve6YG3MwHf4DzqwA9wUZlKxpvEh6jP1mx9b / Xrcll9qdYkx7NC3UdJpRsW9B0X8e / bKjQAVRZEIAFYl3NHACuQXx0 + z6 + f + vXKvbpLWPYjtXB5B9kdOY / yqzoOg33EF4yh + xtoAJr67lHNHawk / SIPWRvqL39egoMGy0 / UtXmaK2jYhcNK7ZEcSno0refcOp / Tq4dG4f4fiFzqshln5crbjCyy / vnPur5Z9T3VstX1nSOG7WPTNIt1R0yY0Yh5i5G9xcv3yHr4Co9uJby9le4upGkdm5jzEkZ + NQb +/ wCMdSuF9nsFW0tFHLHHbgRqB3bgZ / IVomubyVuaSbLH7XMx / EmvEgJwWOB4d5rJREX6Kj16n8aCmKW8Qggqw8ACp + BrodI1q4jkVe0dJFwcMSGHnnvFaUE1XuSh + sjBkb6ynyP61R2d8MPFxRpqLHqmmypdajFH7q3kI915eVfrYyr + IOeq5Mp21xDdW9tdQtzQ3EMc8TeKSKHU / nUVaReKFgnGGVfm50O4ZG910I8xXecKAw6StjzFhpl3eWEbHvgjkLw / 5GSg31KUqBSlY99I0Nlfyr9KK1uJF9VjZhQfP / FGoNqerateliVlumWLPdChMcY / ACtHCAW9M1euSOzGTuWTHwBzVu3G5 / db + tBnQkhz3YYb48gelZl + gZYpQzdww2CfyrCXaQ56FUby8P5VnzzxTW3JGrkoMs3LyoPLJoPIDIqAqQQdyp + ifhWs1dxI8KgEABmZT3Mdv9f6zs7aS17MB51QjbBB / kK12qpHzxSJKkgYMpKHpjfcVRqCpFU9K2NyoaOF8DJ6nAycrnesJ18KguQTFSu5yK39rcmRRG23MMk95FcwpIbFbm1JaPmB9 + PfzK0HYcPawNB1OG7IPsU6rbago / 4JbKzY8UO / oW8amdSGAYEEEAgg5BB3yDXz9C4kQbZyMHNSxwNqTXujLayuWuNKkFmxJyzQcvNAx + 77v3DVHVVwnyjawltp0WjxnNxqRWSYD6lrE4bf95gAPIH493UEcWaidT4g1a4R + aGGX2O23yoitvm / d8i3M33qg10EzW4wY8kg8uemfOvJpGjhChj21yXHMPpKn13 / AJD18qt9u8ixoVAEed98sfE1YR + 1mMh6N7kf7i9Px3PxoM63RUVQAAAAAB3CsiSaOGN5H + io6faJ6KPWrCHGAK1moXBmkWFGHImctnbP1mPkKC7p9jqGv6nBbQKHnuZQiA55FA3Z3x9RBufTxO / eaxqWncLaVDpOlnnYEsJNu0vLk7Pdy47u5B3Y8hijRba34Y0CTULocl / qlsJXDbPbabnMcQ7w0p3by / driGmudVvZbyfJLtiNe5UHRQKotpFNO8lzcuWkcl3Zsnz76EqTsMKOnj6mrtxKrHso / wC7XqR9Zh / Id1WKgrqoVQKqHdQXBVak1bFViqNvos5S6MB + hcxsoHcJFBYH9RUscMZazuZCf7yeNj + 8tvFGf0FQzaOY7mzcfVuIT8OcA1M3Cv8A8Nbw9ocD4KtBvqUpUD8atzRJcQzwSZ7OeOSF8HB5ZFKHB + NXKUHzZrGnSWGo39gZBJ7HcSW4crylwhwGwMjf1rGiQJy56dD8dq67j2y9m4kuGJ5I73spi2MheZuV2 + AwaweIdHs9MbT5LFpGtbhJ4XMknaMt1bPyuObA6gqw9T3Cg0jghojnGMo3mOorMtUmlBQMkcWCWLAM5HgM9KxD76nx2I / eG9erI7AcpIBoMqAcsskQIKg7Zqm / gV42A5ecbgDrkVaZkQo6k82QHIPWtgBG6AIOZiN / AetUaOT3rWI + HJn81rFIrZzQbPEMAE5U92c5PSsJ7eaMElcqOrKcioMNlwa2 + kMO0kjIHzkbL03zjIrWsBWTYv2UqvkjHh1oNrakhmXPRiBXb8D3T2mupC2RFqVrLAd9u2hHbxn8A4 + NcHbkmRzgkE10WhTraazoVyzN2Ud / Csi52xNm3DY8ubPwqiZ7u4S0tby7f6Frbz3D5 + zEhc / pXztFOFPNMvMH96Tbfmb3jU9cSME4f4jLKWH9lX4wPEwsBUAHfAPjUHsrgLIVHLzHlQdccxxVtcDAHQdPhVMhy0Y8AzH9K9FBU5ldSolcAjBAPUevWtrwvo0GoatAlzk2VqjahqJI29mgwRGd / rthfTNaoGux0UppfD1zfOcSaizXb + PslqTHCnozZag1vGWrzajf + x823OJroKdg5ACReijA + HnWn5hbwhE2dwRkdQvQn + QrDidp5prmUkvM7SMT5nNXGYuxb4D0FAFeiqaqFBUDVQ61QKrFBWDVYq2KrFUX7cEzW4HUzRY / jFThw5EYtKtjv840snwLco / SoX0yJpr60RRkh + 0xjOeUbfnip4tIBbW1rbj9jDHGcd5VQCaC / wDjT8aUqBSlKCOvlN00y2llqSKM27mKYgfUfbf8vwrgr7Wxe6RpunNCyzW0yyyy8yFJCkTRBlUDIY597fu89p11XT4dTsLyylAKzxsoz3Njb + nxqAV09YNYj0zUWaGNLrsLhshDyb8p5j0zsCe7PlQYAOPSvQeUsO5iSPXvra8Q6ba6ZfLDa9oIJreO4SOWQSvESSjKW + ljbK53we / qdQMOCh2PVSOu39KD0sVznesq0uuXMTHAYncfpWKGLZUj3lwCPHzFUnmXoPjQbiWBXXbp3Vq51uUDp9NGBGG6j0NZ9ndpIojc79BmsmSBWHQHNUcyyN05Tk + Rq / FGVA8a2b2mOleLbY61B5ax9K28C5ktM / S9qtOUj6x7dNjWLDDjFb3QrYXGtaBAV5s38c7LjIKWytOSfIcoqiUdfjjl0PiCOVykbaZf87qMlVELHIHfXz4O4 + Iz + VfSckcc0ckMqq8UqPHIjdGRwVZT5GvnGWFoZZoZF5JYZZYZEOco8bFCpz4YqDEf + 8Pkqj8ya9zRh843ov8AOlB6qvKyRJntJXSJMfbkYIP1rquLZltbC2sIdkzDaoM / srdQv5nNaPRUEur6Wp6JMZj / APiRpB + YFXuLJS99aREk9nDzH1clv50Gnj2THjVYqhOgqug9qoEVTXooKqrFUVWKCoVWKoFXUV3ZEQczuypGvizHAqjseAtON3qRuXXMUGGyenzZDfm3KPgalyud4S0pdM0qHP8AeTqrkkYJQZKkjzyW + 95V0VQKUpQKUpQKjj5ROGmuIxrdlHmWIBb1FG7R9z4Hh3 / 96keqWRXVkdQyOCrKwyGUjBBFB822NnPqF3b2kDRrJMWw8zMI0VFLFmKqW2A7ga8vLO5sLqa1uFAlhbqhJR17njYgZU9xxXacX8JXWi3J1fSRILPtRMeyzz2kuc5GPq1z99q1hqOnRRz2kv8AacTKUuFcNGcn3yxcl8EfV6A9Dtig06nmORgOv4Ef0r0MjZXow6qeoqqG3eYs3aQxRofflmcKqkjICgZck + QqgEN9L3WH0XX / AL1q5sk1fWZqW8jzlZW5k2I3rPtb8lgkmwxisQc4HzmNvrKDgjzArwLE45lZTg4yp76y06D5lyApBJGdq9EAyK0CNPEwZGPoazIbzVJ5ore3hlnuH + hDbxvLK3mEQE4qjcdmiDLEADvO2K7jgbSpeWXXbmLk9piEGlq4w / spPM85B6doQvL / AIVB + tWn0LgPV72aG64jKw2SsJP7PSQPNOdiFuCnuqv2gGJPTbvlBVVQFUAKAAAMAADYAAUHtRB8oWkexasmoxpy2 + pKHZlACi6jGJFOO9hhvPfwqX6wNW0uz1iwubC6XMcy + 64xzxSDdZUPiP8At0NQfO0q4ceYI / DeqDmt / rvD2p6JOtveRgqxdrW4i3iuEQ4JXvBGRkHcZ7xudGVoNlw4P / Noj3rbXRHrhRWPxGSdVbPQRxgfwJV7QW5NWtc / tEni + LLn + VecURFb2KXueOI / 5eQ / mKo1SdKqqlOlVCoPRVQqkVUKCoVWKoqoUFY767LgnQW1K8W7mX / ZoRzDI6pkqT97dR5Bj4Vz2jaTc6vdRwRRs0XaCOQrtzuRnslPpux7hv4ZnPStNg0uzitoguQAZWUYDvgDYeA2CjwH4hmgYAAAAHTFe0pQKUpQKUpQKUpQUuiSKyOqsjAqysAVYHuIO1RtxL8nnO0t7oIUMxZ5LJzyqSd8wsf0NSXSg + bbi1urOVoLuCWCZSQ0cyFGHpmqEiaRgqjJwx + CqWJ / AGvou807TdQj7K + tLe5TGAJ41fGfskjI / Gucn + T3g + ZiyW91b5 + rbXUqr8A5YUEMBHCI6khWLgBgyn3cZJRwGx4HH6bZ1npGs37xiz0y7mMmyvFC6xnvy0rgJjzLVL9pwJwhaMHNi1ywOQb2aWdf + mx5P8tdJHFDCiRxRpHGgCokahEUDoAq7UEbaR8m0j9nNrd4UGMm009t9x0luGH / ALV + Nd7pmjaNo8Rh02zht1b6bIMyyHxklYlz8WNZ9KBSlKBSlKDD1DTdP1W1ks76BZoHw2DkMjjo8br7wYdxB / Wow175PtRsee40kyX9ruWhKqLyIeQXCuPQA + R61LdKD5ujL2l1DKVZXtp1LqQVdSpwysp3B6iui16zF7ZLcRe92PvEruexlwQ3wP61JvEHCWj68rSuvs1 + FAS8hUcxx0WZNgy + u / gRXCrYatoMi2GqQAxZaO0uVy1pdRNn5rnxs3gDg + vUhHkYYcyMMOmxH86rrsbzhRrom40xi43IVMNLF / hde8Vq34X4lJxHpssj537ArysfHllKkfnVGjFVCttJwxxfEcPoOpnwMUIlB + MbEVk23B3GFxhm0t7WM9ZNRligUDx5QWk / yVBohW10rRrzVHiZUlS2d + zV0XMlw / 8Aw7ZT1Pi3Qde7FdJpfB1uZhGzDVLtGXnSMNFptufGdzlm9O / 7NSVpej2 + nIHJEt0yBGl5Qqog / ZwINlTy7 +/ yCxoGhW2j26AIgnMYTEe6Qp17NCdzk7s3Un0AG7pSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgVblhhnjkhmjSSKQcrxyKGRh4MrbVcpQc1c8MCOTt9IuntZAc9lIWeL7rfTH50jm43txyyWNvdAbc6TRb + eWZW / KulpQaAXHGc / urYWNrn6886tj7sfMaqXQ7m6YPq + oTXPQmC25reD0Yg85 / EVvaUFqGC3to0hgijiiQYVIlCqPgKu0pQKUpQKUpQKUpQf / 2Q ==",
                            Noofstocks = 19,
                            ProductCategory = "Electronics",
                            ProductDescription = "Boult Audio ZCharge Bluetooth Wireless in Ear Earphones with Mic, 40H Playtime and Super Fast Charging, Environmental Noise Cancellation for Pro+ Calling and IPX5 Water Resistant (Black)",
                            ProductName = "Hearphones",
                            ProductPrice = 2500,
                            ProductRating = 1.0,
                            SellerName = "Appario Retail Private Ltd"
                        },
                        new
                        {
                            ProductId = 2,
                            Imageurl = "https://m.media-amazon.com/images/I/51+Tdu4vtgL._UX679_.jpg",
                            Noofstocks = 9,
                            ProductCategory = "Fashion",
                            ProductDescription = "White solid casual shirt, has a mandarin collar, a button placket, 1 pocket, long sleeves with roll-up tab features, curved hem",
                            ProductName = "Men White Slim Fit Casual Shirt",
                            ProductPrice = 549,
                            ProductRating = 2.5,
                            SellerName = "Maruti Enterprises"
                        },
                        new
                        {
                            ProductId = 3,
                            Imageurl = "https://tse4.mm.bing.net/th/id/OIP.cg2VMYhsCeKUvE3tp-Dm5AHaOx?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                            Noofstocks = 9,
                            ProductCategory = "Electronics",
                            ProductDescription = "realme 10 Pro+ 5G (Nebula Blue, 128 GB) (8 GB RAM)",
                            ProductName = "Realme 10Pro",
                            ProductPrice = 15000,
                            ProductRating = 3.0,
                            SellerName = "Oppo Mobiles India Private Limited"
                        },
                        new
                        {
                            ProductId = 4,
                            Imageurl = "https://m.media-amazon.com/images/I/612x7+YtEBL._AC_UL480_QL65_.jpg",
                            Noofstocks = 9,
                            ProductCategory = "Home & Kitchen",
                            ProductDescription = "Vinod Bullet Stainless Steel Flask, Double Wall Insulated Steel Flask with Jacket, Hot & Cold Water Bottle 1000 ml, Silver",
                            ProductName = "Flask",
                            ProductPrice = 789,
                            ProductRating = 4.2000000000000002,
                            SellerName = "Vinod Cookware"
                        },
                        new
                        {
                            ProductId = 5,
                            Imageurl = "https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL900_SR900,600_.jpg",
                            Noofstocks = 8,
                            ProductCategory = "Books",
                            ProductDescription = "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living",
                            ProductName = "Life's Amazing Secrets",
                            ProductPrice = 496,
                            ProductRating = 5.0,
                            SellerName = "Penguin Ananda (8 October 2018)"
                        },
                        new
                        {
                            ProductId = 6,
                            Imageurl = "https://m.media-amazon.com/images/I/71TamRUO01L._UY879_.jpg",
                            Noofstocks = 12,
                            ProductCategory = "Watches",
                            ProductDescription = "Diesel watches reflect the confident, assertive nature of the brand itself. Bold and strong, our timepieces will blend seamlessly with any outfit you wear, throughout the year.",
                            ProductName = "Analog Black Dial Men's Watch-DZ4283",
                            ProductPrice = 19495,
                            ProductRating = 0.0,
                            SellerName = "Vee Ess Sales Pvt Ltd"
                        },
                        new
                        {
                            ProductId = 7,
                            Imageurl = " https://tse2.mm.bing.net/th/id/OIP.JDLpwKpZ6fT29FDruRiqTwHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                            Noofstocks = 9,
                            ProductCategory = "Perfume",
                            ProductDescription = "Men Natural Gas-Free Long-Lasting Body Spray - 70ml",
                            ProductName = "Envy",
                            ProductPrice = 185,
                            ProductRating = 0.0,
                            SellerName = "Vini Cosmetics"
                        },
                        new
                        {
                            ProductId = 8,
                            Imageurl = "https://tse1.mm.bing.net/th/id/OIP.uvbeZacQbUB-DrnqR-koCgHaLH?pid=ImgDet&rs=1",
                            Noofstocks = 9,
                            ProductCategory = "Bags",
                            ProductDescription = "Earth-friendly, and a dependable everyday companion, the Dell Pro Slim Backpack 15 (PO1520PS) provides quality protection for your devices.",
                            ProductName = "Dell Pro Slim Backpack 15 | PO1520PS",
                            ProductPrice = 3999,
                            ProductRating = 4.2000000000000002,
                            SellerName = "Cannycom Store"
                        },
                        new
                        {
                            ProductId = 9,
                            Imageurl = "https://snpi.dell.com/snp/images/products/large/520-AAUL_MVI4.jpg",
                            Noofstocks = 9,
                            ProductCategory = "HeadPhones",
                            ProductDescription = "Experience exceptional audio clarity with this Teams certified wired headset that allows you to wear the microphone on either side for a customized fit.",
                            ProductName = "Dell Pro Stereo Headset | WH3022",
                            ProductPrice = 2500,
                            ProductRating = 4.2000000000000002,
                            SellerName = "gadgets storm"
                        },
                        new
                        {
                            ProductId = 10,
                            Imageurl = "amazon.com/images/I/716SnsvjetL._AC_UY327_FMwebp_QL65_.jpg",
                            Noofstocks = 9,
                            ProductCategory = "Monitors",
                            ProductDescription = "Feature Height Adjustment, Anti Glare Screen, Pivot Adjustment, USB Hub, High Dynamic Range, Feature	Height Adjustment, Anti Glare Screen, Pivot Adjustment, USB Hub, High Dynamic Range",
                            ProductName = "Dell 27 QHD Monitor (USB-C) | S2722DC",
                            ProductPrice = 15999,
                            ProductRating = 4.2000000000000002,
                            SellerName = "BenQ, BenQ Corporation 16 Jihu Road, Neihu 114, Taipei, Taiwan"
                        },
                        new
                        {
                            ProductId = 11,
                            Imageurl = "https://img3.junaroad.com/uiproducts/13844456/zoom_1-1499510462.jpg",
                            Noofstocks = 10,
                            ProductCategory = "Watches",
                            ProductDescription = "Case style: Analog watch with a stainless steel circular case Dial style: Black dial with silver hands Strap style: Stainless steel strap with a butterfly clasp for comfort and style Features: Branding in silver at twelve hour mark and Roman numeral marks through out rest of dial Screw to reset time",
                            ProductName = "Titan Women Black Dial Watch",
                            ProductPrice = 3165,
                            ProductRating = 4.0,
                            SellerName = "VRP Telematics"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
