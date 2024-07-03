# Generated by Django 5.0.6 on 2024-07-02 12:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sneakersApp', '0002_picture_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='picture',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pictures_product', to='sneakersApp.product'),
        ),
    ]
