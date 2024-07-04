# populate_fake_data.py
import os
import django


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sneakers.settings')
django.setup()

from sneakersApp.models import Product, Picture

thisName = [
    "CAMPO CHROMEFREE LEATHER WHITE NATURAL", "CAMPO LEATHER WHITE BLACK",
    "V-90 LEATHER WHITE CALIFORNIA", "VOLLEY LEATHER WHITE PEKIN BARK",
    "V-10 B-MESH WHITE NAUTICO", "V-12 LEATHER WHITE STEEL",
    "V-12 LEATHER WHITE MARSALA NAUTICO", "RIO BRANCO ALVEOMESH BLACK WHITE OXFORD GREY",
    "RIO BRANCO ALVEOMESH WHITE PIERRE NATURAL", "V-10 SUEDE MULTICO PEACH"
]

thisDescription = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
]

thisPrice = [
    150, 120,
    140, 160,
    170, 200,
    150, 140,
    120, 130
]

images = [
    "/images/CC2803780A_1_ikP6IIi.jpg",
    "/images/CC2803780A_1_UmC1cDE.jpg",
    "/images/CC2803780A_1.jpg",
    "/images/cp0501537a__2.jpg",
    "/images/cp0502347a_2_1_.jpg",
    "/images/cp0502429a__2.jpg",
    "/images/CP0503121A_2.jpg",
    "/images/EO0202335A_1.jpg",
    "/images/PL0101401A_1.jpg",
    "/images/RB012359_1.jpg",
    "/images/vx0101380a_1.jpg",
    "/images/xd0202297a_1.jpg"
]

def populate(N=10):
    for i in range(N):
        name = thisName[i % len(thisName)]
        description = thisDescription[i % len(thisDescription)]
        price = thisPrice[i % len(thisPrice)]
        
        product = Product.objects.create(name=name, description=description, price=price)

        Picture.objects.create(path=images[i % len(images)], product=product)





if __name__ == '__main__':
    print("Populating the database with fake data...")
    populate(50)  # Génère 50 instances
    print("Done.")