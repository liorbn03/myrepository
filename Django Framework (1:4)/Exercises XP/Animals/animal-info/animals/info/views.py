from django.shortcuts import render
from .data import animals
from .data import families


def display_all_animals(request):
    context = {'animals': animals}
    return render(request, 'animals/all_animals.html', context)


def display_all_families(request):
    context = {'families': families}
    return render(request, 'animals/all_families.html', context)


def display_one_animal(request, animal_id):
    animal = next(item for item in animals if item["id"] == animal_id)
    context = {'animal': animal}
    return render(request, 'animals/animal.html', context)


def display_animal_per_family(request, family_id):
    animals_in_family = [animal for animal in animals if animal["family"] == family_id]
    context = {'animals': animals_in_family}
    return render(request, 'animals/animals_in_family.html', context)
