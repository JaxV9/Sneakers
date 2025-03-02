#!/bin/sh

# Attendre que la base de données soit prête
echo "Attente de la base de données..."
while ! nc -z db 5432; do
  sleep 0.1
done
echo "Base de données démarrée"

# Exécution des migrations Django
echo "Exécution des migrations Django..."
python manage.py migrate --noinput

#création des fausses données

python fake_data.py

# Démarrage du serveur Django
echo "Démarrage du serveur Django..."
exec "$@"