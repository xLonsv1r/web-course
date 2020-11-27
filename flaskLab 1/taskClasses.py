from abc import ABC, abstractmethod
import random


class AbstractBuilding(ABC):

    @abstractmethod
    def buildingHeight(self):
        pass


class OfficeAbs(AbstractBuilding):
    def __init__(self, name, n):
        self.name = name
        self.n = n

    def buildingHeight(self):
        return self.n * 0.05


class FactoryAbs(AbstractBuilding):

    def __init__(self, name, g):
        self.name = name
        self.g = g

    def buildingHeight(self):
        return self.g * 0.2


class Building:
    def __init__(self, name):
        self.name = name


class Office(Building):
    def __init__(self, n):
        Building.__init__(self, "Office")
        self.n = n

    def buildingHeight(self):
        return self.n * 0.05


class Factory(Building):
    def __init__(self, g):
        Building.__init__(self, "Factory")
        self.g = g

    def buildingHeight(self):
        return self.g * 0.000002


def createFactoriesDist(numberFactories):
    factories = {}
    for i in range(numberFactories):
        nameFactory = "Factory " + str(i + 1)
        factory = FactoryAbs(nameFactory, random.randint(10, 100))
        factories[nameFactory] = round(factory.buildingHeight(), 2)
    return factories


def createOfficesDict(numberOffices):
    offices = {}
    for i in range(numberOffices):
        nameOffice = "Office " + str(i + 1)
        office = OfficeAbs(nameOffice, random.randint(10, 100))
        offices[nameOffice] = round(office.buildingHeight(), 2)
    return offices


def findMaxHeight(dict):
    return max(dict.values())


def printDict(dictBuilding):
    for name, height in dictBuilding.items():
        print(f"Name: {name} --> Height: {height}")