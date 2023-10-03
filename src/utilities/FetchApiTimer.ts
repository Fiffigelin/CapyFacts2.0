import { useCallback } from "react";

export function useFetchApiTimer() {
  const scheduleTaskForNoon = useCallback(() => {
    const now = new Date();
    const noon = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      12, // Timmar
      0, // Minuter
      0, // Sekunder
      0 // Millisekunder
    );

    const timeUntilNoon = noon.getTime() - now.getTime();

    // Om det är för sent för idag, schemalägg för nästa dag
    if (timeUntilNoon <= 0) {
      noon.setDate(noon.getDate() + 1);
    }

    const timeUntilNextNoon = noon.getTime() - new Date().getTime();

    return timeUntilNextNoon; // Returnera tiden tills nästa schemalagda uppgift i millisekunder
  }, []);

  return {
    scheduleTaskForNoon, // Returnera funktionen så den kan användas i andra komponenter eller hooks
  };
}
