// Creating a JSON file for my data
const programmers = [
    {
        name: "Jhankar Mahbub",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.18169-9/534875_10150621514341891_834720388_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=8KSnbxm84K0AX-4lYoX&_nc_ht=scontent.fdac116-1.fna&oh=b261a19de1cf7adff575b5d476a49e3a&oe=61755C63`,
        role: 'Senior Programmer',
        profession : 'Web developer',
        key: 'ph1',
        age : 29,
        salary : 15000
    },
    {
        name: "Karina Islam",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t31.18172-8/14711415_706669282817575_4566277205106379850_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=19026a&_nc_ohc=8ZhJvGtFZagAX-92wM6&_nc_ht=scontent.fdac116-1.fna&oh=3c962f91fa0e41aab13d27eec47d5c3c&oe=617687AD`,
        role: 'Programmer',
        profession : 'Designer',
        key: 'ph2',
        age : 23,
        salary : 13000
    },
    {
        name: "Hr Habib",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/127579389_1144678515965726_1155239224870913261_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=rGrJpiXGPRoAX8zoNFg&_nc_ht=scontent.fdac116-1.fna&oh=f53aeadf744eede160f81a81affca38b&oe=61741C4C`,
        role: 'Junior Developer',
        profession : 'Developer',
        key: 'ph7',
        age : 19,
        salary : 19000
    },
    
    {
        name: "Rasel Ahmed",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/240853983_1177556199395477_273729078655322914_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LgtE3EA7jUMAX8GveNm&_nc_ht=scontent.fdac116-1.fna&oh=59872da4ba71cd176e03d74723213a61&oe=6176749D`,
        role: 'Programmer',
        profession : 'Developer',
        key: 'ph4',
        age : 21,
        salary : 3000
    },
    
    {
        name: "Emdadul Hoque Tareque",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/51332176_2088106291285222_3544185945844613120_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cv7xgmCsxXYAX_8u3Cq&_nc_ht=scontent.fdac116-1.fna&oh=b2e534347a9d113fa711ceeca93c75e1&oe=6175EF19`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph5',
        age : 22,
        salary : 2000
    },
    {
        name: "Rezaul Karim Hassan",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/217622200_4302581736471958_7602572517550122676_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JwFYEaVYk44AX_9_7QK&_nc_ht=scontent.fdac116-1.fna&oh=5d98bc57a83a87a097f41a7c02eea75f&oe=6176DA4D`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph6',
        age : 24,
        salary : 1500
    },
    {
        name: "Faisal Bin Touhid",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/133133410_110872520899738_175492083677341258_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=Bl_8klWtGwwAX_B-H6h&_nc_ht=scontent.fdac116-1.fna&oh=3c1d556526a5f7ccb218dc58a3d618f1&oe=617593BE`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph3',
        age : 25,
        salary : 1000
    },
    {
        name: "Mezbaul Abedin Persian",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/215270650_344883510577895_1704465983745947503_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=slRaUsKiSVsAX_Mi_NB&_nc_ht=scontent.fdac116-1.fna&oh=7d65fa5a761baa331ef06bab255e739e&oe=61767FDC`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph8',
        age : 23,
        salary : 1800
    },
    {
        name: "Mujahid Islam",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-1/c112.125.254.254a/p480x480/241567298_570627670649228_6050818110314559528_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=g45FU7EH_LUAX-4EMnd&_nc_ht=scontent.fdac116-1.fna&oh=51399f950ae118f0254c5ae861d58004&oe=61749F44`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph9',
        age : 24,
        salary : 1700
    },
    {
        name: "Misbah Miofa",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/88347137_674078946730622_3878082218173661184_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Av5skHN733sAX_qaIEH&tn=jNve_F_jgHTnSVmj&_nc_ht=scontent.fdac116-1.fna&oh=617dba1c3af7d3d58e8df5574989a6b0&oe=61763FF6`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph10',
        age : 28,
        salary : 1800
    },
    {
        name: "Asif Iqbal",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/127116418_838956510240139_127959342764932349_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=la_hb8AS6YEAX8hUWi2&_nc_ht=scontent.fdac116-1.fna&oh=15b4500a3295637ff65ce34b0b417b75&oe=61744FBB`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph11',
        age : 22,
        salary : 1900
    },
    {
        name: "Israfil Hossen",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-1/p320x320/229026014_1232826983843227_1408555266038192623_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tEq3qJicfe8AX9B-xtV&_nc_ht=scontent.fdac116-1.fna&oh=2f040b41e409e779f0f277f5caa4fb12&oe=6173F015`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph12',
        age : 24,
        salary : 2900
    },
    {
        name: "Azizul Islam Milton",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/240532014_1331917337224296_4316987819669739724_n.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UC5ozwdWjgIAX91h3hv&tn=jNve_F_jgHTnSVmj&_nc_ht=scontent.fdac116-1.fna&oh=d17fe616cec4712e93485346d464179c&oe=6174971F`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph13',
        age : 21,
        salary : 1900
    },
    {
        name: "Sakib Ahmed",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/66403571_1053075638414297_8365478849491763200_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wftmisFPGF8AX-Qaz5t&_nc_ht=scontent.fdac116-1.fna&oh=ecabde18e61a2df65c6aa99534aea808&oe=6173AD01`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph14',
        age : 23,
        salary : 5900
    },
    {
        name: "Solayman Shadin",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/138188417_1364111750615913_3850877509145397425_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Dq6kuTOPWBoAX83Sj2h&_nc_ht=scontent.fdac116-1.fna&oh=cfe76778aca0a684046dbbb446d0c5ae&oe=6175B072`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph15',
        age : 19,
        salary : 1800
    },
    {
        name: "Muktadir Hassan",
        photo : `https://www.facebook.com/photo/?fbid=1892799767704752&set=a.1391930731124994`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph16',
        age : 19,
        salary : 2800
    },
    {
        name: "Md. Gias Uddin Hasan",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/237486074_3066869396931612_1250967033262156293_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dalDFn6nTEkAX8l4w8N&_nc_ht=scontent.fdac116-1.fna&oh=1ed763531cdf052b04c0dfc170a57b4a&oe=6154B179`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph17',
        age : 21,
        salary : 1800
    },
    {
        name: "রকি দাশ",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/131272828_2782025458740361_1268801740915541367_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Rwm-kXkMxMMAX85MXWA&_nc_ht=scontent.fdac116-1.fna&oh=c2ae4b44d147634e25cc608087af2eb4&oe=61741B96`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph18',
        age : 23,
        salary : 1400
    },
    {
        name: "Mohammad Anisul Islam",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/110667213_2604926129770259_1021813321870496236_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jaEDY5YVth4AX-ADoMA&_nc_ht=scontent.fdac116-1.fna&oh=089895ab201d04c0bc4e0bd5d60fcb6d&oe=61748C88`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph19',
        age : 21,
        salary : 1800
    },
    {
        name: "Abu Sufian",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-1/p320x320/164240413_2935313446730858_174748545917993219_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jQLmpJQyYHMAX_cV33r&_nc_ht=scontent.fdac116-1.fna&oh=a82d739717f76532dbd048c374b6bfaa&oe=61737EC3`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph20',
        age : 22,
        salary : 1600
    },
    {
        name: "Alamin Howlader",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/122752019_2662253617360756_5541096395481542401_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kuAt6U93VLAAX9pZd-H&_nc_ht=scontent.fdac116-1.fna&oh=fbb0382a07861d435c79db16322a1edb&oe=61733C48`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph21',
        age : 24,
        salary : 1500
    },
    {
        name: "Sreekanta Raju",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/125313139_3099411056952654_2524418949512853207_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QHOqWlbYbK8AX-kl8ok&_nc_ht=scontent.fdac116-1.fna&oh=fd9283724b3a5d770f76334a92b9040b&oe=6173B8AA`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph22',
        age : 21,
        salary : 1400
    },
    {
        name: "Shrikanta Mazumder",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/133781986_2361190117359521_5135126389865232729_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=E095kwsszrsAX91IFYp&_nc_ht=scontent.fdac116-1.fna&oh=c9782056a4f6829a5d3ebcbf1d895e66&oe=6175C080`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph23',
        age : 21,
        salary : 1400
    },
    {
        name: "Najmus Sakib",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/217032481_3799663143482193_631632611521058660_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oh-JScXbcacAX8gw3BW&_nc_ht=scontent.fdac116-1.fna&oh=ad5e1a8530c95581fe28bb86f6076299&oe=6174992C`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph24',
        age : 23,
        salary : 1800
    },
    {
        name: "Rashad Tanjim Arnob",
        photo : `https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/86933923_3571837826224160_488373966654668800_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PMKvSLGhI2YAX-5cmH8&_nc_ht=scontent.fdac116-1.fna&oh=a467b868337185e2ea3fcfa3bd8ed689&oe=61747E94`,
        role: 'Support Teacher',
        profession : 'Developer',
        key: 'ph24',
        age : 27,
        salary : 1900
    }
];
const programmersStringified = JSON.stringify(programmers);
console.log(programmersStringified);