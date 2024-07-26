# Application de Gestion des Tâches

Cette application de gestion des tâches est développée avec React Native et Expo. Elle permet aux utilisateurs de gérer leurs tâches avec des fonctionnalités telles que l'ajout, la visualisation, la complétion et la suppression. Elle utilise AsyncStorage pour le stockage persistant et la Context API pour la gestion de l'état global.

## Technologies Utilisées

- **React Native** : Pour la construction de l'application mobile.
- **Context API** : Pour la gestion de l'état global dans l'application.
- **AsyncStorage** : Pour le stockage local persistant des tâches.
- **React Native Paper** : Pour les composants de l'interface utilisateur.
- **Expo** : Pour le développement, le prototypage rapide et les outils de test.

## Configuration et Installation

1. **Cloner le Répertoire :**

    ```sh
    git clone https://github.com/AbdelfetahOuwahbi/Task-Manager.git
    cd Task-Manager
    ```

2. **Installer les Dépendances :**

    ```sh
    npm install
    ```

3. **Démarrer l'Application avec Expo :**

    ```sh
    npm expo start
    ```

    Cela ouvrira Expo Dev Tools dans votre navigateur, où vous pouvez lancer l'application sur un simulateur ou un appareil physique via le QR code.

   Si vous avez éjecté d'Expo et utilisez React Native CLI, vous pouvez exécuter le projet avec les commandes suivantes :

   ```sh
   npx react-native run-android
   npx react-native run-ios
   ```

5. **Exécuter l'Application avec Expo Go :**

    - Pour tester sur un appareil physique, scannez le QR code affiché dans Expo Dev Tools avec l'application Expo Go.
    - Pour tester sur un simulateur/emulateur :
        - **Android** : Assurez-vous d'avoir un Android Virtual Device (AVD) ou un appareil physique connecté.
        - **iOS** : Utilisez le simulateur iOS via Xcode ou un appareil physique connecté.

## Instructions d'Utilisation

1. **Ajouter une Tâche :**
    - Appuyez sur le bouton "Ajouter Tâche".
    - Entrez un titre et une description pour la tâche.
    - Appuyez sur "Soumettre" pour ajouter la tâche à la liste.

2. **Visualiser les Tâches :**
    - Les tâches apparaîtront dans une liste sur l'écran principal.

3. **Marquer une Tâche comme Complétée :**
    - Appuyez sur la tâche pour la marquer comme complétée.

4. **Supprimer une Tâche :**
    - Faites glisser une tâche vers la gauche et appuyez sur "Supprimer" pour la retirer de la liste.
  
## Documentation des Choix Techniques

### Gestion de l'État

- **Context API** : Utilisée pour la gestion de l'état global afin de simplifier la gestion d'état dans une application relativement petite sans avoir besoin de bibliothèques supplémentaires comme Redux.

### Stockage Persistant

- **AsyncStorage** : Choisie pour sa simplicité dans le stockage local persistant des données sur l'appareil.

### Composants UI

- **React Native Paper** : Utilisé pour créer une interface utilisateur cohérente et attrayante rapidement.

### Plateforme de Développement

- **Expo** : Utilisé pour faciliter le développement, le prototypage rapide et profiter des outils de développement intégrés.

## Instructions de Déploiement

Pour déployer votre application, utilisez EAS Build pour créer des binaires prêts à être soumis aux app stores.

### Prérequis

- Vérifiez les [limitations d'EAS Build](https://docs.expo.dev/build-reference/limitations/) et autres prérequis avant de commencer.

### Guide de Déploiement Étape par Étape

1. **Installer la Dernière Version d'EAS CLI :**

    ```sh
    npm install -g eas-cli
    ```

2. **Se Connecter à votre Compte Expo :**

    ```sh
    eas login
    ```

3. **Configurer le Projet :**

    Exécutez la commande suivante pour configurer votre projet pour EAS Build :

    ```sh
    eas build:configure
    ```

    Vérifiez les besoins supplémentaires pour :
    - Variables d'environnement
    - Monorepos
    - Packages npm privés
    - Versions spécifiques d'outils comme Node, Yarn, npm, CocoaPods, ou Xcode

4. **Lancer une Construction :**

    - **Pour Android :**

        ```sh
        eas build --platform android
        ```

    - **Pour iOS :**

        ```sh
        eas build --platform ios
        ```

    - **Pour les deux plateformes :**

        ```sh
        eas build --platform all
        ```

    Vous pouvez ajouter un message à la construction en utilisant `--message` :

    ```sh
    eas build --platform ios --message "Message de construction"
    ```

5. **App Signing Credentials :**

    - **Android :**
        - Si vous n'avez pas de keystore, EAS CLI peut en générer une pour vous.
        - Si vous avez précédemment construit avec `expo build:android`, vous pouvez utiliser les mêmes identifiants.

    - **iOS :**
        - Si vous n'avez pas de profil d'approvisionnement ou de certificat de distribution, EAS CLI peut s'en charger pour vous en vous connectant à votre compte Apple Developer Program.
        - Si vous avez précédemment construit avec `expo build:ios`, vous pouvez utiliser les mêmes identifiants.

6. **Attendre la Fin de la Construction :**

    Surveillez l'avancement de la construction et lisez les journaux en suivant le lien vers la page de détails de la construction que EAS CLI fournit. Alternativement, vous pouvez consulter le tableau de bord des constructions :

    ```sh
    eas build:list
    ```

7. **Déployer la Construction :**

    - **Distribuer sur un App Store :**
        - Si vous avez construit pour une distribution sur un app store, suivez la [documentation EAS Submit](https://docs.expo.dev/submit/introduction/) pour télécharger votre application sur le store.

    - **Installer directement sur un appareil Android / iOS Simulator :**
        - Accédez à la page de détails de votre construction depuis votre tableau de bord des constructions et cliquez sur le bouton "Installer" pour installer l'application directement.

### Ressources Supplémentaires

- [Documentation EAS Build](https://docs.expo.dev/build/introduction/)
- [Documentation EAS Submit](https://docs.expo.dev/submit/introduction/)
- [Documentation Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

En suivant ces étapes, vous devriez être en mesure de construire et de déployer votre application en utilisant EAS Build efficacement.
