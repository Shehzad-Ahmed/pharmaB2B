# Generated by Django 4.1.3 on 2022-12-26 20:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('inventory', '0002_alter_productstocks_options'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('deleted', models.BooleanField(default=False)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('status', models.TextField(choices=[('pending', 'pending'), ('placed', 'placed'), ('processing', 'processing'), ('shipped', 'shipped'), ('completed', 'completed'), ('cancelled', 'cancelled')], default='pending')),
                ('payment_mode', models.TextField(choices=[('full', 'full')], default='full')),
                ('total_price', models.IntegerField()),
                ('total_gst', models.IntegerField()),
                ('raw_details', models.JSONField(default=dict)),
                ('placed_by', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Payments',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('deleted', models.BooleanField(default=False)),
                ('payment_amount', models.IntegerField()),
                ('order', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='orders_management.orders')),
                ('paid_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='OrderStocks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders_management.orders')),
                ('product_stock', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.productstocks')),
            ],
            options={
                'unique_together': {('order', 'product_stock')},
            },
        ),
    ]
