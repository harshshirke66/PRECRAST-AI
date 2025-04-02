import React, { useState } from 'react';
import { MapPin, Search, Loader, Filter, ExternalLink, Phone, Mail, Globe, Clock, Award, X } from 'lucide-react';

interface Lawyer {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  specialization: string;
  experience: string;
  rating: number;
  reviews: number;
  website: string;
  availability: string;
  image: string;
}


const LAWYERS_DATA: Lawyer[] = [
  
    {
      "id": 1,
      "name": "A. Baskar",
      "address": "Res: No.175, South Avenue, New Delhi 110011; Res: H.No-2-21, Telephone Colony, Srinivas A Puram, Tirupathy, Andhra Pradesh; Ch: 111, Lawyers Chamber, Supreme Court of India, New Delhi 110201",
      "phone": "Mobile: 9940093468",
      "email": "generallawnews@gmail.com",
      "specialization": "",
      "experience": "",
      "rating": "",
      "reviews": "",
      "website": "",
      "availability": "",
      "image": ""
    },
    {
      "id": 2,
      "name": "Adhikari, Badri Narayan",
      "address": "Res: Village & P.O. Shimurali, P.S. Chakdaha, District-Nadia, West Bengal 741248; Off: A.C.J.M. Court at Kalyani, P.O. & P.S. Kalyani, Dist: Nadia, Kalyani (W.B) 741235; Ch: 319/A, Bankimpally, Po: Sodepur, P.S. Ghola, Dist: 24PGS (N), Kolkata (W.B) 700110",
      "phone": "Tel: 03473-225119, 033-25825487, 09333394851; Mobile: 09332393757",
      "email": "",
      "specialization": "",
      "experience": "",
      "rating": "",
      "reviews": "",
      "website": "",
      "availability": "",
      "image": ""
    },
    {
      "id": 3,
      "name": "Agarwal, Amitabh",
      "address": "Res: MD-1, Sector 'C', Aliganj, Lucknow 266024",
      "phone": "Tel: 0522-2335339; Mobile: 9076743424",
      "email": "amitabhag129@rediffmail.com",
      "specialization": "",
      "experience": "",
      "rating": "",
      "reviews": "",
      "website": "",
      "availability": "",
      "image": ""
    },
    {
      "id": 4,
      "name": "Agarwal, Arun",
      "address": "Res: Jodhraj Bhawan, Opp. Anand Cinema, Sitabuldi, Nagpur-12",
      "phone": "Tel: 522744, 525946",
      "email": "",
      "specialization": "",
      "experience": "",
      "rating": "",
      "reviews": "",
      "website": "",
      "availability": "",
      "image": ""
    },
    {
      "id": 5,
      "name": "Agarwal, Ashish",
      "address": "Res: C-33, (FF), C.C. Colony, Opp. Rana Pratap Bagh, Delhi 110007",
      "phone": "Mobile: 09654749593",
      "email": "ashish4862@yahoo.com",
      "specialization": "",
      "experience": "",
      "rating": "",
      "reviews": "",
      "website": "",
      "availability": "",
      "image": ""
    },
    {
      "id": 6,
      "name": "Agarwal, Dinesh",
      "address": "Res: 23, Jawalapuri, Delhi Road, Near Madhav Puram Road, Meerut, (UP) 250002; Res: 2F, S-505, School Block, Shakarpur, Delhi, 110092; Off: A-19 (GF), Shakarpur, Delhi 110092; Ch: 62, Lawyers Chamber, Supreme Court of India, New Delhi 110001",
      "phone": "Tel: 9412209041, 0121-2400074, 23383892; Mobile: 09412209041",
      "email": "efiles@in.com, dkg_advocates@yahoo.co.in",
      "specialization": "",
      "experience": "",
      "rating": "",
      "reviews": "",
      "website": "",
      "availability": "",
      "image": ""
    },
    {
      "id": 7,
      "name": "Agarwal, Gaurav",
      "address": "Res: Chowk Bazar, P.O. Najibabad, District - Bijnor, U.P.; Ch: 159, Lawyers Chamber Block-I, Delhi High Court, New Delhi 110003",
      "phone": "Tel: 01341-222200, 011-23383514; Mobile: 9412146066",
      "email": "advgaurav99@gmail.com",
      "specialization": "",
      "experience": "",
      "rating": "",
      "reviews": "",
      "website": "",
      "availability": "",
      "image": ""
    },
    {
      "id": 8,
      "name": "Agarwal, Rajendra Prasad",
      "address": "Res: Asha Kutir, Chitra Gupta Nagar, Aligarh Road, Hathras",
      "phone": "Tel: 05722-234186, 31655; Mobile: 9412177446",
      "email": "",
      "specialization": "",
      "experience": "",
      "rating": "",
      "reviews": "",
      "website": "",
      "availability": "",
      "image": ""
    },
    {
      "id": 9,
      "name": "Agarwala, Narendra Kumar",
      "address": "Res: Ganesh Bhavan, Khurja, U.P.",
      "phone": "Tel: 42236",
      "email": "",
      "specialization": "",
      "experience": "",
      "rating": "",
      "reviews": "",
      "website": "",
      "availability": "",
      "image": ""
    },
    {
      "id": 10,
      "name": "Agarwala, Ram Anand",
      "address": "Res: P-344, C.I.T. Scheme VI M, Calcutta; Off: 6, Old Post Office Street, (Basement), Calcutta",
      "phone": "Tel: 23528317, 22430328; Mobile: 09432325588",
      "email": "",
      "specialization": "",
      "experience": "",
      "rating": "",
      "reviews": "",
      "website": "",
      "availability": "",
      "image": ""
    },
    
      {
        "id": 11,
        "name": "Agarwala, Sanjoy",
        "address": "Res: Vill. & P.O. Dhuliyan, Cinema Road, Distt. Murshidabad, West Bengal 742202; Ch: 332, 3rd Floor, M.C. Setalvad Chambers, Bhagwan Das Road, Supreme Court of India, New Delhi 110001",
        "phone": "Tel: 03485-265297, 23070332; Mobile: 09434125012",
        "email": "",
        "specialization": "",
        "experience": "",
        "rating": "",
        "reviews": "",
        "website": "",
        "availability": "",
        "image": ""
      },
      {
        "id": 12,
        "name": "Agnihotri, M.R. (Sr.)",
        "address": "Res: K.No.215, Sector - 9C, Chandigarh",
        "phone": "Tel: 0172-2741640, 2742022; Mobile: 09417062028",
        "email": "",
        "specialization": "",
        "experience": "",
        "rating": "",
        "reviews": "",
        "website": "",
        "availability": "",
        "image": ""
      },
      {
        "id": 13,
        "name": "Ahlawat, Vinod Kumar",
        "address": "Res: Village - Balam, P.O. Garhi, District - Rohtak, Haryana 124001; Off: H.No. 180/22, Vikas Nagar, Rohtak, (Haryana) 124001",
        "phone": "Tel: 09416492273; Mobile: 09416492273",
        "email": "",
        "specialization": "",
        "experience": "",
        "rating": "",
        "reviews": "",
        "website": "",
        "availability": "",
        "image": ""
      },
      {
        "id": 14,
        "name": "Ahmad, Haroon",
        "address": "Res: B-42, Upkar Apartment, Mayur Vihar, Phase-1, Extn., Delhi 110091; Off: 1-B, Muir Road, Allahabad (U.P.) 211002",
        "phone": "Tel: +91532254803; Mobile: 9839051198",
        "email": "",
        "specialization": "",
        "experience": "",
        "rating": "",
        "reviews": "",
        "website": "",
        "availability": "",
        "image": ""
      },
      {
        "id": 15,
        "name": "Ahmad, Khurshid",
        "address": "Res: 814, Sector 21/A, Faridabad; Off: A-56, Gulmohar Park, New Delhi; Ch: 094, Lawyers Chamber, Supreme Court of India, New Delhi 110001",
        "phone": "Tel: 95129-2422466, 2422488, 26962485, 23386375",
        "email": "",
        "specialization": "",
        "experience": "",
        "rating": "",
        "reviews": "",
        "website": "",
        "availability": "",
        "image": ""
      },
      {
        "id": 16,
        "name": "Ahmad, Qamar",
        "address": "Res: 'Alwan-E Ahmad', Tilak Marg, Lucknow (U.P.) 208166",
        "phone": "",
        "email": "",
        "specialization": "",
        "experience": "",
        "rating": "",
        "reviews": "",
        "website": "",
        "availability": "",
        "image": ""
      },
      {
        "id": 17,
        "name": "Ali, Asghar",
        "address": "Res: J-99, Ashok Chowk, Adarsh Nagar, Jaipur, (Raj.)",
        "phone": "Tel: 2615666; Mobile: 09829010666",
        "email": "",
        "specialization": "",
        "experience": "",
        "rating": "",
        "reviews": "",
        "website": "",
        "availability": "",
        "image": ""
      },
      {
        "id": 18,
        "name": "Altaf, Syed Mohid",
        "address": "Res: No.3 J, 7th 'C' Main, 3rd Block, 3rd Cross, Koranangala, Bangalore 560034",
        "phone": "Mobile: 98450-15756",
        "email": "",
        "specialization": "",
        "experience": "",
        "rating": "",
        "reviews": "",
        "website": "",
        "availability": "",
        "image": ""
      },
      
        {
          "id": 19,
          "name": "Amirapu, Sumanth",
          "address": "Res: 145, Padmanabha Nagar, Mehdi Patnam, Hyderabad, Andhra Pradesh",
          "phone": "Mobile: 9885502695",
          "email": "sumanthadvocate@yahoo.com",
          "specialization": "",
          "experience": "",
          "rating": "",
          "reviews": "",
          "website": "",
          "availability": "",
          "image": ""
        },
        {
          "id": 20,
          "name": "Amitabh",
          "address": "Res: Royal-408, Supertech Estate, Opp. Mall, Vaishali, Ghaziabad, U.P.",
          "phone": "Mobile: 91-9958129306",
          "email": "amit0052@rediffmail.com",
          "specialization": "",
          "experience": "",
          "rating": "",
          "reviews": "",
          "website": "",
          "availability": "",
          "image": ""
        },
        {
          "id": 21,
          "name": "Ananda, Padmanabhan, T.K.",
          "address": "Res: 37/1070, West Street, Fort, Trivandrum; Res: C-73, Neeti Bagh, New Delhi, 110049; Ch: 039, Lawyers Chamber, Supreme Court of India, New Delhi 110001",
          "phone": "Tel: 2463065, 2450408, 2452274",
          "email": "",
          "specialization": "",
          "experience": "",
          "rating": "",
          "reviews": "",
          "website": "",
          "availability": "",
          "image": ""
        },
        {
          "id": 22,
          "name": "Ananthachari, Indu Malini (Mrs.)",
          "address": "Res: 17, 1st Main Road, Kottur Gardens, Kottur Puram, Chennai",
          "phone": "Tel: 24474700",
          "email": "",
          "specialization": "",
          "experience": "",
          "rating": "",
          "reviews": "",
          "website": "",
          "availability": "",
          "image": ""
        },
        {
          "id": 23,
          "name": "Anem, Navaneethamma (Mrs.)",
          "address": "Res: H.No.19-4-4C2, K.R.R. Colony, Old D.R. Mahal Road, Behind TVS Showroom, SEV Nagar, Tirupati (A.P.) 517501",
          "phone": "Tel: 9848316000, 9000800152; Mobile: 9848316000",
          "email": "navaneetthamma.anem@gmail.com",
          "specialization": "",
          "experience": "",
          "rating": "",
          "reviews": "",
          "website": "",
          "availability": "",
          "image": ""
        },
        {
          "id": 24,
          "name": "Ansari, A.Q.",
          "address": "Res: H.No.134/4, (GF), Pipe Road, Kurla (West), Bombay; Ch: Rab & Rab, Advocates & Solicitors, 68, Doon Vihar, Rajpur Road, Jakhan, Dehradun 248001",
          "phone": "Tel: 25144175, +91-135-2734745; Mobile: 09837053145",
          "email": "",
          "specialization": "",
          "experience": "",
          "rating": "",
          "reviews": "",
          "website": "",
          "availability": "",
          "image": ""
        },
        {
          "id": 25,
          "name": "Antony Parel Benny",
          "address": "Res: Parayal House, College Road, P.O. Muvattupuzha, Ernakulam, Kerala",
          "phone": "Mobile: 9447391851",
          "email": "",
          "specialization": "",
          "experience": "",
          "rating": "",
          "reviews": "",
          "website": "",
          "availability": "",
          "image": ""
        },
        {
          "id": 26,
          "name": "Anzu K. Varkey (Ms)",
          "address": "Res: Kanjirakatu House, Manjadi (P.O), Thiruvalla-5 (Kerala); Ch: 033, Lawyers Chamber, Supreme Court of India, New Delhi 110001",
          "phone": "Tel: 0469-2740138, 011-23389926; Mobile: 09999151304",
          "email": "anzukvarkey@rediffmail.com",
          "specialization": "",
          "experience": "",
          "rating": "",
          "reviews": "",
          "website": "",
          "availability": "",
          "image": ""
        },
        {
          "id": 27,
          "name": "Appu, Devarajan Karimbil",
          "address": "Res: Karimbil, 4/528-A, Joseph Road, Calicut, Kerala 673032",
          "phone": "Tel: 0495-2769019; Mobile: 9947312066",
          "email": "karimbildileep@yahoo.com",
          "specialization": "",
          "experience": "",
          "rating": "",
          "reviews": "",
          "website": "",
          "availability": "",
          "image": ""
        },
        {
          "id": 28,
          "name": "Arora, Aman",
          "address": "Res: House No-446, Sector-11, Panchkula, Haryana 13411",
          "phone": "",
          "email": "",
          "specialization": "",
          "experience": "",
          "rating": "",
          "reviews": "",
          "website": "",
          "availability": "",
          "image": ""
        },
        
          {
            "id": 29,
            "name": "Arora, Narendra Kumar",
            "address": "Res: 219, Civil Lines South, Muzaffarnagar, Uttar Pradesh 251001; Off: Ankco Solicitors, A-61 Ramprastha, Near Anand Vihar Bus Terminal, Ghaziabad 201011; Ch: H-21, Heera Complex, Ranipur Crossing, Haridwar (Uttarakhand) 249407",
            "phone": "Tel: +91-131-2623987; Mobile: 9837033171, 9760020000",
            "email": "nkarora@ankco.in, ankco@rediffmail.com",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 30,
            "name": "Arunan, Mangavilai Thangamoni Nadar",
            "address": "Res: No.25, Postal Colony, 1st Street, West Mambalam, Chennai 600033; Ch: 162, Addl. New Lawyers Chamber, High Court of Chennai, Chennai",
            "phone": "Tel: 044-24851879, 044-25340499",
            "email": "",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 31,
            "name": "Arya, Rahul",
            "address": "Res: 110/H/14, Elliot Road, Vijay Gupt House, Kolkata, (WB) 700016; Off: A-57, Nizamuddin East, New Delhi 110013",
            "phone": "Tel: 011-24353366; Mobile: 9873571967",
            "email": "rahularya.law@gmail.com",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 32,
            "name": "Asar, Viren",
            "address": "Res: Flat No-18, 4th Floor, 'HORIZON VIEW', Gymkhana, Mumbai 400021; Off: 4th Floor, Behramji Mansion, Opp. Kashmir Emporium, Sir P.M. Road, Mumbai 400001",
            "phone": "Tel: 022-22641573; Mobile: 9820106190",
            "email": "asarvb@gmail.com",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 33,
            "name": "Ashok Kumar",
            "address": "Res: H.No.2358, Sector-13, Urban Estate, Karnal",
            "phone": "",
            "email": "",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 34,
            "name": "Ashok Kumar",
            "address": "Res: 3/354, Vikash Nagar, Lucknow, (UP)",
            "phone": "Tel: 2767609; Mobile: 09838560439, 09451403744",
            "email": "",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 35,
            "name": "Ashok Kumar (Lt.Col.)",
            "address": "Res: No.161, Preetam Nagar, Allahabad; Off: 070, Lawyers Chamber, High Court Building, Allahabad; Ch: 107, Lawyers Chamber, Supreme Court of India, New Delhi 110001",
            "phone": "Tel: 2633606, 2624455",
            "email": "",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 36,
            "name": "Ashok Kumar, B.K.",
            "address": "Res: A-703, Citiscape, J.B. Nagar, Andheri-East, Mumbai 400059; Off: 5, Gauresh, Old Police Line, Opp. Andheri Station (E), Mumbai 400069",
            "phone": "Tel: 022-28245633, 022-26841181; Mobile: 9820048975",
            "email": "bekay_legal@yahoo.co.in",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 37,
            "name": "Assumi, Kivi",
            "address": "Res: Assumi Villa, Majakong Ward, Mokokchung Town, Mokokchung, (Nagaland) 798601",
            "phone": "Tel: 0369-2226614; Mobile: 9862529978, 9612096309",
            "email": "assumiki@yahoo.com",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 38,
            "name": "Asthana, Sanchit Shankar",
            "address": "Res: Dhanpat Bhawan, 8, Faizabad Road, Lucknow 226007; Ch: 063, Lawyers Chamber, 4th Floor, High Court Lucknow Bench, Lucknow 226001",
            "phone": "Tel: 0522-2782227, 0522-2782201; Mobile: 9415005880",
            "email": "",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 39,
            "name": "Ataur, Rab (Sr.)",
            "address": "Res: Flat No.1705, Tower No-8, Valley View Estate (BSF Co-op, H.S), Gol Pahadi, Gurgaon; Ch: Rab & Rab, Advocates & Solicitors, 68, Doon Vihar, Rajpur Road, Jakhan, Dehradun 248001",
            "phone": "Tel: +91-135-2734745; Mobile: 09837053145, 9411304734",
            "email": "",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 40,
            "name": "Baby John P.D.",
            "address": "Res: 'Pallikunnath', Viyyur P.O., Thrissur District, Kerala 680010; Off: O/1A, Jungpura Extension, New Delhi 110014",
            "phone": "Tel: 0487-3296700, 011-43575349; Mobile: 09847256666",
            "email": "pdvpdbjohn@gmail.com",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          {
            "id": 41,
            "name": "Badheka, Pradyumna",
            "address": "Res: 42/5, Vaundara, Bhulabhai Desai Road, Bombay; Res: No.50, South Avenue, New Delhi, 110001; Off: 13, Rustam Sidhwa Marg, Fairy Manor, (6th Floor), Fort, Bombay",
            "phone": "Tel: 24942323, 23792231, 2265469",
            "email": "",
            "specialization": "",
            "experience": "",
            "rating": "",
            "reviews": "",
            "website": "",
            "availability": "",
            "image": ""
          },
          
            {
              "id": 42,
              "name": "Badheka, Pranav",
              "address": "Res: 42/5, Vasundhara, Bhulabhai Desai Road, Mumbai 400026; Off: 13, Fairy Manor, (6th Floor), Gunbow St., Fort, Mumbai 400001",
              "phone": "Tel: 022-23516483, 022-22663563; Mobile: 9821010633",
              "email": "ppbadheka@vsnl.net, pranavbadheka@hotmail.com",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 43,
              "name": "Bag, Chittaranjan",
              "address": "Res: B.K.183, Salt Lake City, Sector - II, Calcutta 700091; Off: No.160, Baitak Khana Road, Calcutta 700009",
              "phone": "Tel: 23591176, 23210495, 23500050",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 44,
              "name": "Bag, Rabindra Nath",
              "address": "Res: Sujaganj, P.O.- Midnapur, District - Midnapur, West Bengal 721101; Off: Bar Association No.9, High Court at Calcutta, Calcutta",
              "phone": "Tel: 5562691, 03222-62550, 22483190",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 45,
              "name": "Bagadiya, Satish C. (Sr.)",
              "address": "Res: No.403, Morya Regency, 577/2 M. G. Road, Indore, (MP); Off: No.201, D.M. Tower, 21/1, Race Course Road, New Palasia, Indore; Ch: Bar Council Chambers, High Court Indore, Indore",
              "phone": "Tel: 2540930-31, 0731-2540923, 24-25, 2515171; Mobile: 09827024682",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 46,
              "name": "Baij Nath",
              "address": "Res: H.No.140, Village-Deluhan, Post-Meja Road, Tehsil - Meja, Allahabad, (UP)",
              "phone": "Mobile: 7376786283",
              "email": "advpatel487@gmail.com",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 47,
              "name": "Bajoria, R.N. (Sr.)",
              "address": "Res: 78/80, Block-'E', New Alipore, Kolkata 700053; Res: H.No.147, Sector-15A, Noida, 201301; Res: No.78/80, Block-'E', New Alipore, Kolkata, 700053; Off: 1B, Old Post Office Street, (GF), Room No.3, Kolkata 700001",
              "phone": "Tel: 033-30907795, 0120-2512099, 033-24789096, 30907795, 033-22481207, 22201771; Mobile: 9830153554",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 48,
              "name": "Bajpai, Amarendra Kumar",
              "address": "Res: No.444, Narhi, Lucknow 226001; Ch: 009, Lawyers Chamber, High Court Campus, Lucknow, (UP)",
              "phone": "Tel: 0522-2286405; Mobile: 09415064071",
              "email": "amarendrakbajpai@gmail.com",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 49,
              "name": "Bajpai, Mahendra Kumar",
              "address": "Res: 6A/201, Kalpak Estate, Shaikh Misry Road, Antop Hill, Mumbai 400037; Off: 1-A, 40/42 (First Floor), Moti Street, Fort, Mumbai 400001",
              "phone": "Tel: 022-24016315, 022-22658117; Mobile: 9820047609",
              "email": "mkbajpai@vsnl.net",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 50,
              "name": "Bajwa, Gurmeet Singh",
              "address": "Res: 319, Advocate Society, Sector-49-A, Chandigarh",
              "phone": "Mobile: 09814103628",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 51,
              "name": "Bajwa, Sukhmani (Ms)",
              "address": "Res: House No-154, Sector-9-B, Chandigarh; Off: Haryana Bhawan, Copernicus Marg, New Delhi",
              "phone": "Tel: 0172-2743085, 011-23386102; Mobile: 09910980088",
              "email": "sukhmanibajwa3@gmail.com",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 52,
              "name": "Bajwa, Tejbir Singh",
              "address": "Res: V.Jand Teh Dasuya, District - Hoshiarpur, Punjab",
              "phone": "Tel: 01883-87495",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 53,
              "name": "Bakaraju, Venkatrama Rao",
              "address": "Res: 3-4-529/7, Lingampally, Barkathpura, Hyderabad-(A.P) 500027; Off: 103, Savitri Sadanamu, MU 3-4-526/41, Barkathpura, Hyderabad-(A.P) 500027",
              "phone": "Tel: 040-27552028, 040-27564195; Mobile: 09848608161",
              "email": "bvrlawyer@gmail.com",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 54,
              "name": "Balaji, K.",
              "address": "Res: No.1, Ramanakkensi, Royapuram, Madras; Off: No.133, Ramanakkensi, Royapuram, Madras",
              "phone": "Tel: 25952135",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 55,
              "name": "Balakrishna Pillai, S.P.",
              "address": "Res: B-1/8, (Ground Floor), Hauz Khas, New Delhi 110016",
              "phone": "Tel: 011-40569822; Mobile: 09650829000",
              "email": "advbalan@hotmail.com",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 56,
              "name": "Balwada, Praveen",
              "address": "Res: No.15/95, Malviya Nagar, Jaipur; Off: L-4, Krishna Marg, C-Scheme, Jaipur 302001; Ch: 035, Lawyers Chamber, High Court of Jaipur, Jaipur, (Rajasthan) 302001",
              "phone": "Tel: 0141-2554632, 0141-2374110, 2377039, 383008; Mobile: 09414075001, 09314901007",
              "email": "balwadap@hotmail.com",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 57,
              "name": "Banatwala, Mustafa K.",
              "address": "Res: 65, Bhajipala Street, Banatwala Building, (3rd Floor), Mumbai 400003; Off: 65, Bhajipala Street, Banatwala Building, (Ground Floor), Mumbai 400003",
              "phone": "Tel: 23438221, 23421124; Mobile: 9821833280",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 58,
              "name": "Banerjee, Ashok Kumar (Sr.)",
              "address": "Res: No.8, Santiram Rasta, P.O.Bally, P.S.Bally, Distt.Howrah, (W.B.); Off: No.6, Old Post Office Street (GF), Room No.51, Calcutta",
              "phone": "Tel: 26542447, 22487165",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 59,
              "name": "Banerjee, Ranit Kumar (Dr.) @ Bandyopadhyay",
              "address": "Res: B-6/8, Labony Estate, EB-Block, Sector-I, Salt Lake City, Kolkata 700064; Off: AC-28 (Ground Floor), Sector-1, Salt Lake City, Kolkata 700064",
              "phone": "Tel: 033-23580302, 23583272, 033-23589532, 64549908; Mobile: 09830381733",
              "email": "ranit_ban@gmail.com",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 60,
              "name": "Banerjee, Somnath",
              "address": "Res: Agrani Street, Mohiskapur Plot, Benachity, Durgapur 713213",
              "phone": "Mobile: 09434645515",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 61,
              "name": "Banerji, Ashoc (Dr.)",
              "address": "Res: 'ABHOY', Preswar Sahi, Cuttack 753003; Ch: 012, Lawyers Chamber, Supreme Court of India, New Delhi 110001",
              "phone": "Tel: 0671-2548649; Mobile: 9437048649",
              "email": "drashoc9@rediffmail.com",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 62,
              "name": "Bansal, Arun",
              "address": "Res: H.No.568, Sector - 16D, Chandigarh",
              "phone": "Tel: 0172-2544264; Mobile: 09814017584",
              "email": "arunbansal99@yahoo.com",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            {
              "id": 63,
              "name": "Bansal, Indira (Ms.)",
              "address": "Res: 116, Rewa Chambers, New Marine Lines, Mumbai; Off: 116, Rewa Chambers, New Marine Lines, Mumbai",
              "phone": "Tel: 022-2205539",
              "email": "",
              "specialization": "",
              "experience": "",
              "rating": "",
              "reviews": "",
              "website": "",
              "availability": "",
              "image": ""
            },
            
              {
                "id": 64,
                "name": "Bansal, Naveen",
                "address": "Res: H.No.1563, Sector - 21, Panchkula, (Haryana) 136118; Off: S.C.O.-282, Sector-20, Panchkula, (Haryana); Ch: 004, Lawyers Chamber, New Complex, District Court, Kurukshetra, (Haryana)",
                "phone": "Tel: 9041315680, 09812170180; Mobile: 9812170180, 9041315680",
                "email": "naveen690@y.mail.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 65,
                "name": "Bansal, Sandeep",
                "address": "Res: H.No -568, Sector-16-D, Chandigarh",
                "phone": "Tel: 0172-2770610; Mobile: 9814302568",
                "email": "saptsandeep@epatra.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 66,
                "name": "Bansal, Satya Dev",
                "address": "Res: H.No. 571, Sector 8-B, Chandigarh 160009",
                "phone": "Tel: 0172-3242380, 0172-2544389; Mobile: 9814666115",
                "email": "satyadevbansal@yahoo.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 67,
                "name": "Bansal, Sunil",
                "address": "Res: H.No.2030, Gali No.4, Rampura Mohalla, Hisar, (Haryana) 125001; Off: National Gas Service, S.C.O. 23-24-25, Red Square Market, Hisar, (Haryana) 125001",
                "phone": "Tel: 01662-228091, 236368, 01662-237625; Mobile: 9896036162",
                "email": "",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 68,
                "name": "Basandhi, Rajesh Kumar",
                "address": "Res: V-404, (4th Floor), Jaipuria Sunrise Greens, VIP Road, Zirakpur, Dist. S.A.S. Nagar, Mohali, (Punjab) 140603; Res: House No.15, Shivalik Vihar, Zirakpur, Tehsil. Dera Bassi, Distt. SAS Nagar, (Mohali) Punjab, 140603",
                "phone": "Tel: 01762-297006, 09814343930; Mobile: 08283813273-74, 07814120006",
                "email": "basandhir@gmail.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 69,
                "name": "Basu, Amit",
                "address": "Res: 65/5F, Bagbazar Street, Kolkata 700003; Off: Victor Moses & Co., Temple Chamber, 6, Old Post Office Street, Kolkata 700001; Ch: C-129, East of Kailash, New Delhi 110065",
                "phone": "Tel: 033-25554631, 033-22481296, 22484600, 26929793, 26929794; Mobile: 9831071617",
                "email": "vmoses@vsnl.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 70,
                "name": "Basu, Partha",
                "address": "Res: No.212, Kali Charan Ghose Road, Calcutta; Off: 10, Old Post Office Street, R.No.5, Calcutta",
                "phone": "Tel: 2284050",
                "email": "",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 71,
                "name": "Basu, Sagnik",
                "address": "Res: Avani Oxford, Block-5, Flat-5C, Lobby 1, Lake Town, Block-B, 136, Jessore Road, Kolkata 700055; Off: 'Shrachi Garden', Block-XI, Flat-34, 251/1, Nagendra Nath Road, Kolkata 700028",
                "phone": "Tel: 033-25593995; Mobile: 09831009465, 09830301777",
                "email": "sagnikbasu@gmail.com, adv.sagnikbasu@gmail.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 72,
                "name": "Batra, Siddharth",
                "address": "Res: 40/15, East Patel Nagar, New Delhi 110008; Off: 3/31, FF, West Patel Nagar, New Delhi 110008",
                "phone": "Tel: 011-47066911, 011-47046111; Mobile: 09888884445",
                "email": "siddharth.batra@satramdass.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 73,
                "name": "Batta, Roshan Lal (Sr.)",
                "address": "Res: H.No.2096, Sector - 15C, Chandigarh",
                "phone": "Tel: 2773361, 549874; Mobile: 9876974565",
                "email": "",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 74,
                "name": "Bedi, T.P. Singh",
                "address": "Res: No.487, Model Town, Karnal; Res: F-90, Bali Nagar, New Delhi",
                "phone": "Tel: 25415279",
                "email": "",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 75,
                "name": "Beig, Razia (Ms.)",
                "address": "Res: 60, Ghosi Gali, Dehradun, Uttaranchal",
                "phone": "Tel: 0135-2657742; Mobile: 09412967558",
                "email": "",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 76,
                "name": "Berarwalla, F.L.",
                "address": "Res: 53, Divyang, 6th Floor, Sassoon Docks, Colaba, Mumbai 400005; Off: 19, Parekh Vora Chambers, 66, Nagindas Master Road, Fort, Mumbai 400001",
                "phone": "Tel: 22832029, 22670221, 22672307",
                "email": "berawalla@yahoo.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 77,
                "name": "Bhadana, Dharam Pal",
                "address": "Res: Kothi No.1040, Sector - 14, Faridabad; Off: B-I, Taj Apartments Building, Near Safdarjung Hospital, Ring Road, New Delhi",
                "phone": "Tel: 95129-2285851",
                "email": "",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 78,
                "name": "Bhaduri, Kalyan Acharya",
                "address": "Res: HB-288/5, Sector-III, Salt Lake City, Kolkata 700106; Off: 6-A, (3rd Floor), Kiran Shankar Roy Road, Kolkata 700001",
                "phone": "Tel: 033-23347615, 033-22489926; Mobile: 09830036530",
                "email": "kabhaduri@vsnl.net",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 79,
                "name": "Bhan, Akshay",
                "address": "Res: H.No.302, Sector-10B, Chandigarh (Punjab) 160011",
                "phone": "Mobile: 9814016740",
                "email": "",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 80,
                "name": "Bhangle, Meghasham Shripad",
                "address": "Res: A-33, Shripadsadan, Nathewada, Sawantwadi, Distt. Sindhudurg; Off: S-2, Moti Tower, Saliawada, Sawantwadi, Dist. Sindhudurg",
                "phone": "Tel: 02363-273276, 02363-271213; Mobile: 09422374276",
                "email": "msbhagle@gmail.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 81,
                "name": "Bhargav, Anirudh",
                "address": "Res: 1459/9, Babra Street, Near Saraswati High School, Rohtak 124001; Off: C-61, Jangpura Extension, Near Birbal Park, New Delhi",
                "phone": "Tel: 95126-236067, 24329849",
                "email": "a_bhargava12@rediffmail.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 82,
                "name": "Bhargava, Anjali (Ms.)",
                "address": "Res: Hemant Kunj, Malli Tal, Naini Tal, (Uttaranchal); Off: Central Government Office, High Court of Uttaranchal, Nainital, Uttaranchal",
                "phone": "Tel: 05942-235247; Mobile: 09837418318",
                "email": "",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 83,
                "name": "Bhargava, Rakesh",
                "address": "Res: Kishori Gunj, Sheetla Ghati, Mathura; Off: C-64A, (FF), Kalkaji, New Delhi 110019",
                "phone": "Tel: 407321, 26213148, 26423130",
                "email": "",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 84,
                "name": "Bhargava, Ritu (Mrs.)",
                "address": "Res: 5/2, Old Palasia, Indore, (MP) 452018; Ch: 016, Bar Council Chamber, High Court Compound, Indore, (MP)",
                "phone": "Tel: 0731-2565130, 2565667, 0731-2523703; Mobile: 9893054087",
                "email": "shekharb@sancharnet.in",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 85,
                "name": "Bhargava, Shekhar (Sr.)",
                "address": "Res: H.No. 5/2, Old Palasia, Indore, (MP) 452018; Ch: 016, Bar Council Chamber, High Court Compound, Indore, (MP)",
                "phone": "Tel: 0731-2565130, 2565667, 0731-2523703; Mobile: 9425054087",
                "email": "shekharb@sancharnet.in",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 86,
                "name": "Bhate, Yogeshwar S.",
                "address": "Res: Om Dnyanesh Co-op. Hsg. Socy. Ltd., Flat No.17, (3rd Floor), S.G. Bharve Marg, Kurla (W), Mumbai 400070; Off: Om Dnyanesh Co-op. Hsg. Socy. Ltd., Flat No.5, (GF), S.G. Bharve Marg, Kurla (W), Mumbai 400070",
                "phone": "Tel: 022-26500508, 022-65270702; Mobile: 9869073770",
                "email": "",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 87,
                "name": "Bhatnagar, Hari Mohan",
                "address": "Res: House No.28/30, Sewak Ashram Road, Dehradun 248001",
                "phone": "Mobile: 09760016118",
                "email": "bhatnagar_hm@yahoo.co.in",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              {
                "id": 88,
                "name": "Bhatt, Devesh",
                "address": "Res: 10, Adhyapak Mitra Mandal Society, Near Govt. Polytechnic, Ambawadi, Ahmedabad 380015",
                "phone": "Tel: 6421491, 6563345; Mobile: 9825095630",
                "email": "deveshabhatt@hotmail.com",
                "specialization": "",
                "experience": "",
                "rating": "",
                "reviews": "",
                "website": "",
                "availability": "",
                "image": ""
              },
              
                {
                  "id": 89,
                  "name": "Bhatt, J.J. (Sr.)",
                  "address": "Res: 'Aangan', Flat No. 1-A/B, 1st Floor, Main Avenue, Santacruz (W), Mumbai 400054; Off: 3/5, Sindhu House, Nanabhai Lane, Fort, Mumbai 400001",
                  "phone": "Tel: 022-26463500, 022-22047474; Mobile: 09821033433",
                  "email": "bhat.jagdeep@gmail.com",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 90,
                  "name": "Bhatt, Radha Balabh",
                  "address": "Res: Nainital Vernon College Compound, Talli Tal, Nainital",
                  "phone": "Tel: 011-25596617, 955942, 236891; Mobile: 09897562109",
                  "email": "",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 91,
                  "name": "Bhattacharjee, Paresh Chandra",
                  "address": "Res: 48, Fakir Para Road, Kolkata, WB 700034; Off: 12/1 Old Post Office Street, Room No.M-5, 1st Floor, Kolkata 700001",
                  "phone": "Tel: 033-23970520, 033-22300179; Mobile: 09874696917, 9477397002",
                  "email": "",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 92,
                  "name": "Bhattacharjee, Uma (Mrs.)",
                  "address": "Res: No.19/15, Seal Lane, P.O. Seal Lane, Calcutta; Ch: No.6, 2nd Floor, High Court Bar Assn., Calcutta",
                  "phone": "Tel: 22449427",
                  "email": "",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 93,
                  "name": "Bhattacharya, Aninda",
                  "address": "Res: Ishan Apartments, 1/211, Gariahat Road (South), Jodhpur Park, Kolkata 700068; Off: 5, Kiran Shankar Roy Road, First Floor, Kolkata 700001",
                  "phone": "Tel: 033-22101617, 22101625; Mobile: 9830323683",
                  "email": "anindia_v@rediffmail.com",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 94,
                  "name": "Bhattacharya, Ratna (Ms.)",
                  "address": "Res: Flat No.43A/2, Middle Road, Calcutta 700075; Ch: 095, Lawyers Chamber, Supreme Court of India, New Delhi 110001",
                  "phone": "Mobile: 9831452615",
                  "email": "",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 95,
                  "name": "Bhattacharyya, Bikash R. (Sr.)",
                  "address": "Res: 87/11-G, Raja S.C., Mallick Road, Calcutta",
                  "phone": "Tel: 033-24265555, 24265000",
                  "email": "",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 96,
                  "name": "Bhattacharyya, Kalyan N. (Sr.)",
                  "address": "Res: T.G. Road, C.A.J. Bose Road, Agartala, Ker Chowmobani, Tripura 799001",
                  "phone": "Tel: 0381-2323303; Mobile: 09436124530",
                  "email": "",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 97,
                  "name": "Bhatti, Daygeesh Kumar",
                  "address": "Res: H.No. 487, Sector-12, Panchkula, Haryana 134115; Ch: Seat No.13, New Bar Complex, High Court Delhi, Delhi 110035",
                  "phone": "Tel: 2590308, 0172-2590308; Mobile: 9815081590",
                  "email": "blallidk@yahoo.com",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 98,
                  "name": "Bhaumik, Kalyan",
                  "address": "Res: Flat No.210, 6/5D, Swinhoe Street, Kolkata 700019",
                  "phone": "Mobile: 9830455550",
                  "email": "",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 99,
                  "name": "Bhave, Harihar",
                  "address": "Res: 6, Shiv Sadan, Govindrao Patwardhar Marg, Opp. Portuguese Church, Dadar West, Bhawani Shankar, Mumbai; Off: Flat No-503, Silver Arch Apart., Ferozeshah Road, New Delhi 110001",
                  "phone": "Tel: 022-24302961, 011-23326536; Mobile: 9969201301",
                  "email": "bhavco@gmail.com",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                },
                {
                  "id": 100,
                  "name": "Bhesania, Bakhtiar S.",
                  "address": "Res: 'Nazir House', Cumballa Hills, Bombay; Off: Mulla & Mulla Blunt & Caroe, Advocates, 51, M.G. Road, Bombay",
                  "phone": "Tel: 28224198, 28281407, 22044960, 22047201",
                  "email": "",
                  "specialization": "",
                  "experience": "",
                  "rating": "",
                  "reviews": "",
                  "website": "",
                  "availability": "",
                  "image": ""
                }
];

export default function LawyerFinder() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLawyers, setFilteredLawyers] = useState<Lawyer[]>(LAWYERS_DATA);
  const [loading, setLoading] = useState(false);
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const filtered = LAWYERS_DATA.filter(lawyer => {
        const matchesSearch = searchQuery.trim() === '' || 
          lawyer.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lawyer.name.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesSearch;
      });
      
      setFilteredLawyers(filtered);
      setLoading(false);
    }, 500);
  };

  const handleViewDetails = (lawyer: Lawyer) => {
    setSelectedLawyer(lawyer);
    setShowDetails(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white/10 rounded-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <MapPin className="text-emerald-400" size={32} />
          <h2 className="text-2xl font-semibold text-white">Find Lawyers Near You</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Search by Location or Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter location or lawyer name"
              />
            </div>
          </div>

          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader className="animate-spin" size={20} />
                <span>Searching...</span>
              </div>
            ) : (
              'Find Lawyers'
            )}
          </button>
        </div>

        {filteredLawyers.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Available Lawyers {searchQuery && `near ${searchQuery}`}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLawyers.map(lawyer => (
                <div 
                  key={lawyer.id} 
                  className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={lawyer.image} 
                      alt={lawyer.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 rounded-bl-lg">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1">{lawyer.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h4 className="font-semibold text-white text-lg">{lawyer.name}</h4>
                      <p className="text-emerald-400 text-sm">{lawyer.specialization}</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-gray-300 text-sm">
                        <MapPin size={14} className="mr-1 text-gray-400" />
                        <span>{lawyer.address}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-300 text-sm mb-2">
                      <Clock size={14} className="mr-1 text-gray-400" />
                      <span>{lawyer.availability}</span>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <a 
                        href={lawyer.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center"
                      >
                        <Globe size={14} className="mr-1" />
                        <span>Website</span>
                      </a>
                      
                      <button
                        onClick={() => handleViewDetails(lawyer)}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded hover:bg-emerald-500/30 transition text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Lawyer Details Modal */}
      {showDetails && selectedLawyer && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-3xl w-full border border-gray-700 shadow-xl overflow-hidden">
            <div className="relative h-64">
              <img 
                src={selectedLawyer.image} 
                alt={selectedLawyer.name}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h2 className="text-2xl font-bold text-white">{selectedLawyer.name}</h2>
                <div className="flex items-center mt-1">
                  <p className="text-emerald-400">{selectedLawyer.specialization}</p>
                  <span className="mx-2 text-gray-500">•</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-white">{selectedLawyer.rating}</span>
                    <span className="ml-1 text-gray-400">({selectedLawyer.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <MapPin size={18} className="mr-3 text-emerald-400 flex-shrink-0" />
                      <span>{selectedLawyer.address}</span>
                    </li>
                    <li className="flex items-center">
                      <Phone size={18} className="mr-3 text-emerald-400 flex-shrink-0" />
                      <span>{selectedLawyer.phone}</span>
                    </li>
                    <li className="flex items-center">
                      <Mail size={18} className="mr-3 text-emerald-400 flex-shrink-0" />
                      <span>{selectedLawyer.email}</span>
                    </li>
                    <li className="flex items-center">
                      <Globe size={18} className="mr-3 text-emerald-400 flex-shrink-0" />
                      <a 
                        href={selectedLawyer.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        {selectedLawyer.website.replace(/^https?:\/\//, '')}
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Professional Details</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Award size={18} className="mr-3 text-emerald-400 flex-shrink-0" />
                      <span><strong>Experience:</strong> {selectedLawyer.experience}</span>
                    </li>
                    <li className="flex items-center">
                      <Clock size={18} className="mr-3 text-emerald-400 flex-shrink-0" />
                      <span><strong>Availability:</strong> {selectedLawyer.availability}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">About</h3>
                <p className="text-gray-300">
                  {selectedLawyer.name} is a highly experienced {selectedLawyer.specialization.toLowerCase()} attorney with {selectedLawyer.experience} of practice. 
                  They have successfully represented numerous clients and maintain an excellent reputation with a {selectedLawyer.rating} star rating from {selectedLawyer.reviews} client reviews.
                </p>
              </div>
              
              <div className="flex justify-between pt-4 border-t border-gray-700">
                <a 
                  href={`tel:${selectedLawyer.phone.replace(/[^0-9]/g, '')}`}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition flex items-center"
                >
                  <Phone size={18} className="mr-2" />
                  <span>Call Now</span>
                </a>
                
                <a 
                  href={`mailto:${selectedLawyer.email}`}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition flex items-center"
                >
                  <Mail size={18} className="mr-2" />
                  <span>Send Email</span>
                </a>
                
                <a 
                  href={selectedLawyer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition flex items-center"
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span>Visit Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}