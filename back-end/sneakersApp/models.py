from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, Group, Permission

# Create your models here.
class CustomUserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fields):
        if not email:

            raise ValueError('The Email field must be set')

        email = self.normalize_email(email)

        user = self.model(email=email, **extra_fields)

        user.set_password(password)

        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)

        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:

            raise ValueError('Superuser must have is_staff=True.')

        if extra_fields.get('is_superuser') is not True:

            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    # Add your custom fields here
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    groups = models.ManyToManyField(
        Group,
        verbose_name=('groups'),
        blank=True,
        help_text=('The groups this user belongs to. A user will get all permissions granted to each of their groups.'),
        related_name="user_set_custom",
        related_query_name="user_custom",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=('user permissions'),
        blank=True,
        help_text=('Specific permissions for this user.'),
        related_name="user_set_custom",
        related_query_name="user_custom",
    )