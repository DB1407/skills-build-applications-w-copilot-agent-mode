from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data (delete individually for Djongo compatibility)
        for obj in Activity.objects.all():
            obj.delete()
        for obj in User.objects.all():
            obj.delete()
        for obj in Team.objects.all():
            obj.delete()
        for obj in Workout.objects.all():
            obj.delete()
        for obj in Leaderboard.objects.all():
            obj.delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        users = [
            User(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User(name='Captain America', email='cap@marvel.com', team=marvel),
            User(name='Spider-Man', email='spiderman@marvel.com', team=marvel),
            User(name='Superman', email='superman@dc.com', team=dc),
            User(name='Batman', email='batman@dc.com', team=dc),
            User(name='Wonder Woman', email='wonderwoman@dc.com', team=dc),
        ]
        for user in users:
            user.save()

        # Create activities
        Activity.objects.create(user=users[0], type='Running', duration=30, calories=300, date='2025-10-20')
        Activity.objects.create(user=users[3], type='Cycling', duration=45, calories=400, date='2025-10-19')

        # Create workouts
        Workout.objects.create(name='Pushups', description='Upper body strength', difficulty='Medium')
        Workout.objects.create(name='Squats', description='Lower body strength', difficulty='Easy')

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=250)
        Leaderboard.objects.create(team=dc, points=200)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with superhero test data'))
