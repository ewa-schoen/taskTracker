# Codzienne zadania

Prosta lista zadań na każdy dzień, z trzema priorytetami: **Krytyczne**, **Ważne** i **Normalne**.

Dodajesz zadania, odhaczasz je, a aplikacja zapisuje datę i godzinę wykonania. Zadania, których nie zrobisz, **same przechodzą na następny dzień** (jako Normalne), a zrobione zostają w swoim dniu jako historia.

Działa jako aplikacja na Androidzie, także bez internetu. Wszystkie dane są tylko na Twoim telefonie: bez konta, bez reklam, bez śledzenia.

## Jak to działa

- **Trzy priorytety.** Krytyczne zadania są na samej górze, ważne pod nimi, normalne na dole. Kolor paska i pasek postępu u góry pokazują, co jeszcze zostało.
- **Odhaczanie z datą.** Po zaznaczeniu zadania pojawia się np. „Zrobione pon., 21 wrz, 14:32”. Datę można poprawić, jeśli zadanie zrobiono innego dnia.
- **Nowy dzień.** O północy niezrobione zadania z poprzednich dni przechodzą na dzisiaj z priorytetem **Normalny** i dopiskiem „Przeniesione z…”. Zrobione zadania nie przechodzą dalej.
- **Planowanie z wyprzedzeniem.** Zadanie można dodać na jutro albo na inny dzień w przyszłości. Pojawi się dopiero wtedy.
- **Historia.** Strzałkami na górze przeglądasz poprzednie dni i to, co w nich zrobiono.
- **Cofnij.** Po każdej zmianie (odhaczenie, usunięcie…) na dole pojawia się przycisk **Cofnij**.
- **Polski i angielski.** Język wybierzesz w Ustawieniach, domyślnie zgodnie z językiem telefonu.
- **Kopia zapasowa** do pliku i przywracanie z pliku.
- Jasny i ciemny motyw, zgodnie z ustawieniami telefonu.

## Instalacja na Androidzie

1. Na telefonie otwórz w **Chrome** adres:
   **https://ewa-schoen.github.io/NAZWA-REPOZYTORIUM/**
2. Stuknij menu **⋮** (prawy górny róg) i wybierz **Zainstaluj aplikację**. W niektórych wersjach to **Dodaj do ekranu głównego**, a potem **Zainstaluj**.
3. Otwieraj aplikację z ikony na ekranie głównym.

Po pierwszym otwarciu działa bez internetu.

## Twoje dane

Wszystko, co wpiszesz, zapisuje się tylko w pamięci aplikacji na telefonie. Nic nie jest wysyłane, a strona w internecie dostarcza tylko samą aplikację.

Dlatego odinstalowanie aplikacji albo wyczyszczenie danych Chrome usuwa zadania. Co jakiś czas użyj **Ustawienia → Zapisz plik kopii**, a w razie potrzeby **Przywróć z pliku kopii** (np. na nowym telefonie).

## Publikacja na GitHub Pages

Link z instalacji zadziała dopiero po jednorazowym włączeniu GitHub Pages:

1. Utwórz na GitHubie **publiczne** repozytorium (np. o nazwie `todo`) i wgraj do jego **głównego folderu** pliki aplikacji:
   ```
   index.html
   manifest.webmanifest
   sw.js
   icons/
   README.md
   ```
   Wgrywasz same pliki, nie plik zip. `index.html` musi leżeć na samej górze repozytorium, a nie w podfolderze.
2. Wejdź w **Settings → Pages** repozytorium. W sekcji **Build and deployment** ustaw **Source** na **Deploy from a branch**, wybierz gałąź **main** i folder **/ (root)**, po czym kliknij **Save**.
3. Po minucie lub dwóch GitHub pokaże na górze tej strony adres aplikacji, np. `https://ewa-schoen.github.io/todo/`. Otwórz go na telefonie i zainstaluj jak wyżej.

### Aktualizacja

Zmień pliki w repozytorium i w pliku `sw.js` zmień nazwę wersji (`daily-todo-v1` na `daily-todo-v2` itd.). Telefon pobierze wtedy nową wersję przy następnym otwarciu, a zapisane zadania zostaną.

## Gdy coś nie działa

- **Brak opcji „Zainstaluj aplikację”:** sprawdź, czy otwierasz adres `https://…github.io/…` w Chrome i czy Chrome jest aktualny. Jeśli aplikacja jest już zainstalowana, w menu zobaczysz **Otwórz**.
- **Strona pokazuje 404:** GitHub Pages nie jest jeszcze włączony albo dopiero się publikuje. Sprawdź kroki powyżej i poczekaj kilka minut. Sprawdź też, czy `index.html` leży w głównym folderze repozytorium.
- **Nie widać ostatnich zmian:** zmień wersję w `sw.js` (patrz wyżej), zamknij i otwórz aplikację ponownie.
- **Zniknęły moje zadania:** wyczyszczenie danych Chrome lub odinstalowanie aplikacji je usuwa. Przywróć je z pliku kopii. Jeśli aplikacja zmieni adres w internecie, zaczyna od zera, więc tam też przywróć kopię.

## Z czego jest zrobione

Zwykły HTML, CSS i JavaScript w jednym pliku, bez bibliotek i bez połączeń z internetem. To Progressive Web App (manifest + service worker); dane są w `localStorage` przeglądarki pod kluczem `dailyTodo.v1`.
