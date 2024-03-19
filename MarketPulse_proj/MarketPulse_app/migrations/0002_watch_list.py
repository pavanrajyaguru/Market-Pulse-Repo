# Generated by Django 4.2.11 on 2024-03-18 17:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MarketPulse_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Watch_list',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('index', models.CharField(max_length=255)),
                ('w_name', models.CharField(max_length=100)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MarketPulse_app.user', verbose_name='user_id')),
            ],
        ),
    ]
