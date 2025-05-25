
## Examen complet en JavaScript

### Partie théorique (14 points)

#### Exercice 1 : Questions de connaissance (8 points) - 2 points par question

1. Qu'est-ce que JavaScript et quel est son rôle dans le développement web ?

    
2. Quelle est la différence entre == et === en JavaScript ?
    
3. Expliquez le concept des "Promises" en JavaScript et énumérez ses trois états possibles.
    
4. Comment pouvez-vous masquer un élément en utilisant jQuery ?
    

#### Exercice 2 : Analyse de code (6 points)

1. Que retournera la ligne suivante ? (2 points)
    

```javascript
console.log(typeof null);
```

2. Vous avez le code suivant :
    

```javascript
function test() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}
test();
```

- Quel est le résultat attendu de l’exécution de cette fonction ? (2 points)
    
- Ce comportement changerait-il si on utilisait `let` au lieu de `var` ? Expliquez votre réponse. (2 points)
    

---

### Partie pratique (26 points)

#### Exercice 1 : Gestion des données des employés (16 points)

Vous avez le tableau suivant contenant des données d’employés :

```javascript
let employees = [
  { id: 1, nom: "Ahmed", salaire: 5000 },
  { id: 2, nom: "Fatima", salaire: 6000 },
  { id: 3, nom: "Youssef", salaire: 4500 },
  { id: 4, nom: "Nada", salaire: 7000 }
];
```

**À faire :**

1. Écrire une fonction `displayEmployees()` pour afficher la liste des employés sur une page HTML. (4 points)
    
    - Chaque employé doit être affiché dans un élément `<li>` contenant l’ID, le nom et le salaire.
        
    - Il faut utiliser la manipulation du DOM pour créer les éléments.
        
2. Écrire une fonction `addEmployee(employee)` pour ajouter un nouvel employé à la liste. (3 points)
    
    - L’employé doit être ajouté au tableau et l’affichage doit être mis à jour sur la page.
        
3. Écrire une fonction `removeLastEmployee()` pour supprimer le dernier employé de la liste. (3 points)
    
    - L’employé doit être supprimé du tableau et l’affichage mis à jour sur la page.
        
4. Écrire une fonction `updateSalary(id, newSalary)` pour modifier le salaire d’un employé donné. (3 points)
    
    - Il faut retrouver l’employé par ID, mettre à jour son salaire puis mettre à jour l’affichage.
        
5. Écrire une fonction `calculateTotalSalary()` pour calculer la somme des salaires. (3 points)
    
    - Elle doit retourner le total des salaires de tous les employés.
        

#### Exercice 2 : Validation de formulaire (10 points)

1. Écrire le code HTML d’un formulaire contenant les champs suivants :
    
    - Nom (input type="text")
        
    - Email (input type="email")
        
    - Mot de passe (input type="password")
        
    - Bouton d’envoi (input type="submit")
        
2. Écrire le code JavaScript pour valider le formulaire lors de l’envoi :
    
    - Le nom ne doit pas être vide.
        
    - L’e-mail doit être dans un format valide (utiliser des expressions régulières).
        
    - Le mot de passe doit comporter plus de 8 caractères.
        
3. Si tous les champs sont valides, afficher le message "Formulaire réussi" sur la page.
    
4. S’il y a des erreurs, afficher des messages d’erreur appropriés pour chaque champ incorrect.
    

---

### Critères de correction

#### Partie théorique (14 points)

- Réponses claires et précises : +2 points par question
    
- Réponses incomplètes ou imprécises : +1 point par question
    
- Réponses fausses ou absentes : 0 point
    

#### Partie pratique (26 points)

- Exercice 1 (16 points) :
    
    - Fonctions qui fonctionnent correctement et produisent les résultats attendus : +12 points (3 points par fonction)
        
    - Bonne utilisation de la manipulation du DOM : +2 points
        
    - Organisation et clarté du code : +2 points
        
- Exercice 2 (10 points) :
    
    - HTML correct : +2 points
        
    - Validation des champs : +4 points (1 point par validation)
        
    - Affichage de messages appropriés : +2 points
        
    - Organisation et clarté du code : +2 points
        

---

### Remarques importantes

- Le candidat doit utiliser les concepts suivants dans ses réponses :
    
    - Manipulation du DOM
        
    - Événements (Events)
        
    - Méthodes de tableau (comme `map`, `filter`, `reduce`)
        
    - Expressions régulières (Regular Expressions)
        
    - Gestion des erreurs (Error Handling)
        
    - Promises (si demandées dans la consigne)
        
- L’utilisation de jQuery est recommandée si elle est demandée, sinon privilégier le JavaScript natif.
    
- Le candidat doit produire un code propre, bien organisé, avec des commentaires clairs expliquant les actions réalisées.
