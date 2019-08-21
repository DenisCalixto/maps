# Generated by Django 2.2.3 on 2019-08-01 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language', '0037_merge_20190729_2158'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Art',
        ),
        migrations.AlterModelOptions(
            name='champion',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='community',
            options={'verbose_name_plural': 'Communities'},
        ),
        migrations.AlterModelOptions(
            name='dialect',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='language',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='languagefamily',
            options={'verbose_name_plural': 'Language Families'},
        ),
        migrations.AlterModelOptions(
            name='languagesubfamily',
            options={'verbose_name_plural': 'Language Sub Families'},
        ),
        migrations.AlterModelOptions(
            name='lna',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='lnadata',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='placename',
            options={'ordering': ['name']},
        ),
        migrations.AlterField(
            model_name='community',
            name='audio_file',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='language',
            name='audio_file',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='placename',
            name='audio_file',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]