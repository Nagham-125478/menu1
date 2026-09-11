const menuData = [
    {
        categoryId: 'grill',
        categoryName: 'المشويات',
        items: [
            { id: 1, name: 'دجاجة على الفحم مع رز', price: 7.18, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&auto=format&fit=crop' },
            { id: 2, name: 'نص دجاجة على الفحم مع رز', price: 3.59, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&auto=format&fit=crop' },
            { id: 3, name: 'دجاجة على الفحم سادة', price: 5.67, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&auto=format&fit=crop' },
            { id: 4, name: 'نص دجاجة على الفحم سادة', price: 2.83, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&auto=format&fit=crop' },
            { id: 5, name: 'شيش طاووق بعظم', price: 3.02, image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&auto=format&fit=crop' },
            { id: 6, name: 'كباب دجاج', price: 3.40, image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&auto=format&fit=crop' },
            { id: 7, name: 'أوصال / شقف دجاج', price: 3.40, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&auto=format&fit=crop' },
            { id: 8, name: 'كباب لحمة', price: 3.40, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&auto=format&fit=crop' },
            { id: 9, name: 'أوصال / شقف لحمة', price: 3.40, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 10, name: 'كباب حلبي لحمة', price: 3.40, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&auto=format&fit=crop' },
            { id: 11, name: 'مشكل مشويات (4 أسياخ)', price: 4.54, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 12, name: 'وجبة مشويات مع رز (4 أسياخ)', price: 5.48, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 13, name: 'نص كيلو مشويات مشكل', price: 9.45, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 14, name: '7 أسياخ + صحن مقبلات', price: 18.90, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 15, name: 'كيلو مشويات (14 سيخ + 2 صحن مقبلات)', price: 18.90, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 16, name: 'سدر المشويات صغير', price: 12.28, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 17, name: 'سدر المشويات وسط', price: 23.62, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 18, name: 'سدر المشويات كبير', price: 34.01, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' }
        ]
    },
    {
        categoryId: 'mandi',
        categoryName: 'المندي والمدفون',
        items: [
            { id: 19, name: 'دجاجة مندي مع رز', price: 7.18, image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=400&auto=format&fit=crop' },
            { id: 20, name: 'نص دجاجة مندي مع رز', price: 3.59, image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=400&auto=format&fit=crop' },
            { id: 21, name: 'دجاجة مندي سادة', price: 5.67, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&auto=format&fit=crop' },
            { id: 22, name: 'نص دجاجة مندي سادة', price: 2.83, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&auto=format&fit=crop' },
            { id: 23, name: 'ربع دجاجة مندي مع رز', price: 1.89, image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=400&auto=format&fit=crop' },
            { id: 24, name: 'ربع دجاجة مندي سادة', price: 1.51, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&auto=format&fit=crop' },
            { id: 25, name: 'وجبة مندي لحم (نفر)', price: 10.39, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 26, name: 'ربع خاروف مندي', price: 42.52, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 27, name: 'نص خاروف مندي', price: 85.03, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 28, name: 'خاروف مندي مقطع', price: 170.07, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' },
            { id: 29, name: 'خاروف مندي كامل', price: 170.07, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop' }
        ]
    },
    {
        categoryId: 'rice',
        categoryName: 'الأرز والدجاج الشواية',
        items: [
            { id: 30, name: 'دجاجة شواية مع رز', price: 7.18, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&auto=format&fit=crop' },
            { id: 31, name: 'نص دجاجة شواية مع رز', price: 3.59, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&auto=format&fit=crop' },
            { id: 32, name: 'دجاجة شواية سادة', price: 5.67, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&auto=format&fit=crop' },
            { id: 33, name: 'نص دجاجة شواية سادة', price: 2.83, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&auto=format&fit=crop' },
            { id: 34, name: 'ربع دجاجة شواية مع رز', price: 1.89, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&auto=format&fit=crop' },
            { id: 35, name: 'ربع دجاجة شواية سادة', price: 1.51, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&auto=format&fit=crop' },
            { id: 36, name: 'صحن رز مبهر / عادي', price: 1.51, image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&auto=format&fit=crop' },
            { id: 37, name: 'جريش / رشوف أردني', price: 1.51, image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=400&auto=format&fit=crop' }
        ]
    },
    {
        categoryId: 'pastry',
        categoryName: 'المناقيش والمعجنات',
        items: [
            { id: 38, name: 'منقوشة جبنة', price: 1.32, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop' },
            { id: 39, name: 'منقوشة جبنة مع عسل', price: 1.32, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop' },
            { id: 40, name: 'منقوشة زعتر', price: 0.57, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop' },
            { id: 41, name: 'منقوشة سبانخ', price: 0.57, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop' },
            { id: 42, name: 'منقوشة لبنة', price: 0.94, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop' },
            { id: 43, name: 'منقوشة لبنة مع عسل', price: 1.32, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop' },
            { id: 44, name: 'منقوشة لبنة مع زعتر', price: 0.94, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop' },
            { id: 45, name: 'فطيرة / مناقيش دجاج', price: 1.32, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop' },
            { id: 46, name: 'فطيرة / مناقيش لحمة', price: 1.32, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop' },
            { id: 47, name: 'بيتزا صغيرة (خضار / لحمة / دجاج / أجبان)', price: 1.51, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&auto=format&fit=crop' },
            { id: 48, name: 'بيتزا وسط (خضار / لحمة / دجاج / أجبان)', price: 2.46, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&auto=format&fit=crop' },
            { id: 49, name: 'عش البلبل صغير', price: 1.51, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop' },
            { id: 50, name: 'عش البلبل وسط', price: 2.46, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop' },
            { id: 51, name: 'طلب معجنات مشكل صغير', price: 3.78, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop' },
            { id: 52, name: 'طلب معجنات مشكل وسط', price: 5.67, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop' },
            { id: 53, name: 'طلب معجنات مشكل كبير', price: 7.56, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop' }
        ]
    },
    {
        categoryId: 'appetizers',
        categoryName: 'المقبلات والسلطات',
        items: [
            { id: 54, name: 'صحن حمص', price: 1.32, image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=400&auto=format&fit=crop' },
            { id: 55, name: 'صحن متبل باذنجان', price: 1.32, image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=400&auto=format&fit=crop' },
            { id: 56, name: 'سلطة خضرا', price: 1.32, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop' },
            { id: 57, name: 'سلطة تبولة', price: 1.32, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop' },
            { id: 58, name: 'بابا غنوج', price: 1.32, image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=400&auto=format&fit=crop' },
            { id: 59, name: 'سلطة زيتون', price: 1.32, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop' },
            { id: 60, name: 'صحن مقبلات مشكل صغير', price: 1.51, image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=400&auto=format&fit=crop' },
            { id: 61, name: 'صحن مقبلات مشكل كبير', price: 2.46, image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=400&auto=format&fit=crop' },
            { id: 62, name: 'ورق عنب طازج صغير', price: 1.32, image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&auto=format&fit=crop' },
            { id: 63, name: 'ورق عنب طازج وسط', price: 2.46, image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&auto=format&fit=crop' },
            { id: 64, name: 'ورق عنب طازج كبير', price: 3.78, image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&auto=format&fit=crop' },
            { id: 65, name: 'سدر ورق عنب صغير', price: 4.72, image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&auto=format&fit=crop' },
            { id: 66, name: 'سدر ورق عنب كبير', price: 6.61, image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&auto=format&fit=crop' },
            { id: 67, name: 'سدر مقبلات (تبولة / متبل / حمص / بابا غنوج)', price: 4.72, image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=400&auto=format&fit=crop' }
        ]
    },
    {
        categoryId: 'stew',
        categoryName: 'الطبيخ والإدامات',
        items: [
            { id: 68, name: 'خضار مشكلة', price: 1.51, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop' },
            { id: 69, name: 'طبيخ بامية', price: 1.51, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop' },
            { id: 70, name: 'منزلة باذنجان / مسقعة', price: 1.51, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop' },
            { id: 71, name: 'طبيخ ملوخية', price: 1.51, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop' }
        ]
    },
    {
        categoryId: 'sandwiches',
        categoryName: 'الشاورما والسندويشات',
        items: [
            { id: 72, name: 'سندويشة شاورما دجاج صغيرة', price: 0.94, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&auto=format&fit=crop' },
            { id: 73, name: 'سندويشة شاورما دجاج كبيرة', price: 1.51, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&auto=format&fit=crop' },
            { id: 74, name: 'سندويشة شاورما صاروخ', price: 1.89, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&auto=format&fit=crop' },
            { id: 75, name: 'سندويشة شاورما خبز تركي / صاج', price: 1.89, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&auto=format&fit=crop' },
            { id: 76, name: 'وجبة شاورما عربي (صحن)', price: 3.02, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&auto=format&fit=crop' },
            { id: 77, name: 'سندويشة كباب لحمة / دجاج', price: 1.32, image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&auto=format&fit=crop' },
            { id: 78, name: 'سندويشة أوصال / شقف لحمة / دجاج', price: 1.32, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&auto=format&fit=crop' },
            { id: 79, name: 'سندويشة فيليه دجاج مع جبنة', price: 1.32, image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?w=400&auto=format&fit=crop' }
        ]
    },
    {
        categoryId: 'fried',
        categoryName: 'البروستد والبرغر والمقالي',
        items: [
            { id: 80, name: 'وجبة بروستد دجاج (عادي / حار)', price: 3.02, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&auto=format&fit=crop' },
            { id: 81, name: 'صحن مسحب دجاج (عادي / حار)', price: 2.83, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&auto=format&fit=crop' },
            { id: 82, name: 'صحن بطاطا صغير', price: 0.94, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop' },
            { id: 83, name: 'صحن بطاطا كبير', price: 1.32, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop' },
            { id: 84, name: 'سمبوسك دجاج أو جبنة (7 حبات)', price: 0.94, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop' },
            { id: 85, name: 'طلب سمبوسك (25 حبة)', price: 3.78, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop' },
            { id: 86, name: 'كُبة دجاج (4 حبات)', price: 1.89, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop' },
            { id: 87, name: 'كُبة وسط (10 حبات)', price: 4.72, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop' },
            { id: 88, name: 'طلب كُبة (20 حبة) صغير', price: 5.67, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop' },
            { id: 89, name: 'برغر لحمة / دجاج مع جبنة', price: 1.32, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop' },
            { id: 90, name: 'برغر دبل لحمة', price: 2.27, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop' },
            { id: 91, name: 'برغر دبل دجاج', price: 2.27, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop' }
        ]
    },
    {
        categoryId: 'drinks',
        categoryName: 'العصائر والمشروبات',
        items: [
            { id: 92, name: 'عصير برتقال / فيمتو / أناناس', price: 0.94, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&auto=format&fit=crop' },
            { id: 93, name: 'عصير برتقال خلاط طازج', price: 1.51, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&auto=format&fit=crop' },
            { id: 94, name: 'عصير ليمون خلاط / فراولة / مانجو', price: 1.51, image: 'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=400&auto=format&fit=crop' },
            { id: 95, name: 'عصير كوكتيل / موز بالحليب', price: 1.51, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&auto=format&fit=crop' },
            { id: 96, name: 'مشروبات غازية بيبسي وسط', price: 0.57, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop' },
            { id: 97, name: 'مشروبات غازية بيبسي كبير', price: 0.94, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop' }
        ]
    },
    {
        categoryId: 'desserts',
        categoryName: 'الحلويات',
        items: [
            { id: 98, name: 'كريم كراميل', price: 0.94, image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=400&auto=format&fit=crop' },
            { id: 99, name: 'مهلبية', price: 0.94, image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=400&auto=format&fit=crop' },
            { id: 100, name: 'سلطة فواكه', price: 1.51, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop' },
            { id: 101, name: 'كنافة', price: 1.51, image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&auto=format&fit=crop' }
        ]
    }
];

// مصفوفة السلة
let cart = [];

const menuContainer = document.getElementById('menuContainer');

function renderMenu(data) {
    menuContainer.innerHTML = '';

    if (data.length === 0) {
        menuContainer.innerHTML = '<div class="no-results">عذراً، لا توجد وجبات تطابق بحثك.</div>';
        return;
    }

    data.forEach(category => {
        if (category.items.length === 0) return;

        const catSection = document.createElement('div');
        catSection.className = 'category-section';

        let itemsHTML = '';
        category.items.forEach(item => {
            itemsHTML += `
                <li class="menu-item">
                    <img src="${item.image}" alt="${item.name}" class="item-img" loading="lazy">
                    <div class="item-details">
                        <span class="item-name">${item.name}</span>
                        <span class="item-price">${item.price.toFixed(2)} د.أ</span>
                    </div>
                    <button class="add-btn" onclick="addToCart(${item.id})">+ أضف</button>
                </li>
            `;
        });

        catSection.innerHTML = `
            <div class="category-title">${category.categoryName}</div>
            <ul class="item-list">
                ${itemsHTML}
            </ul>
        `;

        menuContainer.appendChild(catSection);
    });
}

// إضافة وجبة بالسلة
function addToCart(itemId) {
    let selectedItem = null;

    for (const cat of menuData) {
        const item = cat.items.find(i => i.id === itemId);
        if (item) {
            selectedItem = item;
            break;
        }
    }

    if (!selectedItem) return;

    const existingInCart = cart.find(i => i.id === itemId);
    if (existingInCart) {
        existingInCart.quantity++;
    } else {
        cart.push({
            id: selectedItem.id,
            name: selectedItem.name,
            price: selectedItem.price,
            quantity: 1
        });
    }

    updateCartUI();
}

// تغيير كمية عنصر بالزائد أو الناقص
function changeQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== itemId);
    }

    updateCartUI();
}

// تفريغ السلة بالكامل
function clearCart() {
    cart = [];
    updateCartUI();
}

// تحديث واجهات السلة المفتوحة والشريط السفلي
function updateCartUI() {
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

    // الشريط الهيدر والشريط السفلي
    document.getElementById('cartCount').textContent = totalCount;
    document.getElementById('bottomCartCount').textContent = totalCount;
    document.getElementById('bottomCartTotal').textContent = totalPrice.toFixed(2);
    document.getElementById('modalCartTotal').textContent = totalPrice.toFixed(2);

    // قائمة الوجبات داخل النافذة المنبثقة
    const cartItemsContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">السلة فارغة حالياً</div>';
        return;
    }

    let itemsHTML = '';
    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        itemsHTML += `
            <div class="cart-item-row">
                <div>
                    <strong>${item.name}</strong><br>
                    <small style="color:#aaa">${item.price.toFixed(2)} د.أ × ${item.quantity} = ${itemTotal} د.أ</small>
                </div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span style="font-weight:bold; color:#fff">${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = itemsHTML;
}

// فتح وإغلاق النافذة المنبثقة للسلة
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
}

function filterCategory(catId) {
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    document.getElementById('searchInput').value = '';

    if (catId === 'all') {
        renderMenu(menuData);
    } else {
        const filtered = menuData.filter(cat => cat.categoryId === catId);
        renderMenu(filtered);
    }
}

function filterItems() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[0].classList.add('active');

    const filteredData = menuData.map(category => {
        const matchingItems = category.items.filter(item =>
            item.name.toLowerCase().includes(query)
        );
        return {
            ...category,
            items: matchingItems
        };
    }).filter(category => category.items.length > 0);

    renderMenu(filteredData);
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuData);
});