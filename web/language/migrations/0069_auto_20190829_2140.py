# Generated by Django 2.2.4 on 2019-08-29 21:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('language', '0068_remove_placename_polygon'),
    ]

    operations = [
        migrations.RenameField(
            model_name='placename',
            old_name='point',
            new_name='geom',
        ),
    ]