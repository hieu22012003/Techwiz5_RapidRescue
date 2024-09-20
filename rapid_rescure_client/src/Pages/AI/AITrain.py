import random

class RescueMission:
    def __init__(self, location, urgency_level):
        self.location = location
        self.urgency_level = urgency_level
        self.status = "Pending"

    def start_mission(self):
        self.status = "In Progress"
        print(f"Rescue mission started at {self.location} with urgency level {self.urgency_level}.")

    def complete_mission(self):
        self.status = "Completed"
        print(f"Rescue mission at {self.location} completed.")

class RescueTeam:
    def __init__(self, name):
        self.name = name
        self.missions = []

    def assign_mission(self, mission):
        self.missions.append(mission)
        mission.start_mission()

    def report_status(self):
        for mission in self.missions:
            print(f"Mission at {mission.location}: {mission.status}")

def simulate_rescue():
    locations = ["Mountain", "Forest", "River", "City"]
    urgency_levels = ["High", "Medium", "Low"]
    
    team = RescueTeam("Rapid Response Team")
    
    for _ in range(3):
        location = random.choice(locations)
        urgency_level = random.choice(urgency_levels)
        mission = RescueMission(location, urgency_level)
        team.assign_mission(mission)
    
    team.report_status()
    
    for mission in team.missions:
        mission.complete_mission()

simulate_rescue()
    