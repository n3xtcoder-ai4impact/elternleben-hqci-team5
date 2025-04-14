# LLM Evaluation

## Msty

We use Msty as a low-code tool
* to run and evaluate LLMs locally
* to provide ElternLeben's documents to the LLM
* to experiment with prompts

## LLMs to be evaluated

### Aya23

> Q: Mein Kind schläft erst um Mitternacht ein.
>
> A: An error occurred. Please try again. fetch failed
>
> Q: Mein Kind - ein Junge - ist 3 Jahre alt. Wir schauen immer abends Fernsehen.
>
> A: Wie alt ist das Kind? Schaut es gerne Fernsehen? Gibt es bestimmte Sendungen, die es besonders mag?

Does not seem to understand the age specification.

## Deepseek R1

> Q: Mein Kind schläft erst um Mitternacht ein.
>
> A: Mifactschiff: Mein Kind ist ungefähr ein halb Jahr alt.
>
> Q: Mein Kind - ein Junge - ist 3 Jahre alt. Wir schauen immer abends Fernsehen.
> 
> A: Dann ist das Kind 3 Jahre alt.

No helpful answer.

## Llama 3.3

errors only: "An error occurred. Please try again. fetch failed"

we should try again

## Phy 4

> Q: Mein Kind schläft erst um Mitternacht ein.
>
> A: Das klingt ziemlich spät für einen Schlafbeginn! Wie alt ist dein Kind? Bei unterschiedlichen Altersstufen sind verschiedene Schlafgewohnheiten üblich. Welche Strategien hast du schon ausprobiert, um die Einschlafzeit zu ändern? Hast du festgestellt, dass etwas bestimmtes seine Schlafroutine beeinflusst?
>
> Q: Mein Kind - ein Junge - ist 3 Jahre alt. Wir schauen immer abends Fernsehen.
>
> A: Bei einem dreijährigen Jungen kann es tatsächlich sein, dass der Bildschirmkonsum vor dem Schlafengehen die Einschlafzeit beeinträchtigt. Das blaue Licht von Fernsehern oder anderen digitalen Geräten wirkt sich oft negativ auf den Melatoninhaushalt aus und kann das Einschlafen erschweren.
>
> Hast du schon versucht, eine Bildschirmfreie Zeit vor dem Schlafengehen einzuführen? Es könnte hilfreich sein, etwa 30 bis 60 Minuten vor der gewünschten Schlafenszeit alle digitalen Geräte auszuschalten und stattdessen ruhigere Aktivitäten wie Vorlesen oder gemeinsames Spielen zu fördern.
>
> Hast du schon eine feste Abendroutine festgelegt, um deinem Sohn einen sanfteren Übergang in den Schlaf zu ermöglichen? Manchmal helfen auch Entspannungsübungen für Kinder, wie leichte Dehnen oder das Anschauen von Sternenhimmel-Apps mit gedimmtem Licht. Hast du darüber nachgedacht, die Fernsehsendung früher auszuschalten und stattdessen eine andere Beschäftigung zu finden?

very good German, good answers - we should try this LLM further.

## Mistral

> Q: Mein Kind - ein Junge - ist 3 Jahre alt. Wir schauen immer abends Fernsehen.
>
> A: Ist dein Kind sehr altertig? (very old)
> Hast du Schwierigkeiten, deines Kindes müden zu machen? (difficult to tire out the child)
> Schließt dein Kind in der Regel erst spät ein? (usually goes to bed late)
> Benötigt dein Kind viel Ruhetagen um entspannen zu können? (needs a lot of rest days)
>
> Q: Mein Kind - ein Junge - ist 3 Jahre alt. Wir schauen immer abends Fernsehen.
>
> A: Hat dein Sohn einen Lieblingsfilm? (does your son have a favorite movie?)
> Magt er sich bei dem Film zu benehmen? (Does he like to act out the scenes in the film)
> Wie lange sieht's aus, bis der Fernseher abgeschaltet wird? (How long does it look before turning off the TV?)

is not really capable to write in German

## Gemma 3:1b

> Q: Mein Kind schläft erst um Mitternacht ein.
>
> A: Das ist wirklich eine tolle und vielleicht auch etwas aufregende Situation! Es ist schön, dass du das mit deinem Kind teilst. Ein "Mitternacht" bedeutet, dass das Kind ein paar Stunden länger schläft als üblich. Hier sind ein paar Dinge, die du beachten und vielleicht diskutieren kannst, um die Situation zu entspannen und zu verstehen:
>
> **1. Verstehen, warum dein Kind das möchte:**
>
> * **Was ist die Motivation?** Das ist der wichtigste Punkt. Warum möchte dein Kind das?
>     * **Möchte es einfach nur ein bisschen länger schlafen?** Manche Kinder sind einfach an den Schlaf ersticken und wollen eine zusätzliche Zeit für sich.
>     * **Sucht es nach Aufmerksamkeit?** Vielleicht schätzt dein Kind, wenn man ihm etwas erlaubt, besonders wenn es sich bedingungslos bedankt.
>     * **Wünscht es sich ein besonderes Erlebnis?** Vielleicht ist es ein besonderer Moment, der mit mehr Zeit verbunden ist.
>     * **Ist es ein Versuch, die Grenzen zu testen?** Manche Kinder sind neugierig und wollen herausfinden, was passiert, wenn sie etwas mehr Zeit haben.
>     * **Hat es eine bestimmte Geschichte oder ein bestimmtes Thema?** Vielleicht ist es mit einem Film, Buch oder einer anderen Geschichte verbunden.
>
> **2. Gemeinsam überlegen:**
>
> * **Was sind die Erwartungen?** Sprich mit deinem Kind darüber, was du von der Mitternacht erwartest. Wie lange soll es schlafen? Gibt es bestimmte Regeln oder Grenzen?
> * **Was ist die Sicherheit?** Das Wichtigste ist, dass dein Kind sicher ist. Erkläre ihm, dass du die Zeit gut kontrollieren wirst und dass du ihn nicht verletzen wirst.
> * **Wie wirst du die Zeit einteilen?**  Stelle sicher, dass das Kind die Zeit einteilen kann, damit es sich wohlfühlt.  Kann es bestimmte Aktivitäten planen, die es während der Zeit unternehmen kann?
> * **Was passiert, wenn das Kind unzufrieden ist?**  Kläre, was passiert, wenn das Kind unzufrieden ist oder die Zeit nicht so lange schläft, wie es möchte.  Möglichkeit, das Kind zu beruhigen und zu beruhigen, ist wichtig.
>
> **3. Kommunikation und Vertrauen:**
>
> * **Sprich ruhig und verständnisvoll mit deinem Kind:** Vermeide es, es zu kritisieren oder zu verurteilen.
> * **Höre aufmerksam zu:** Frage dein Kind, was es erwartet und warum.
> * **Zeige Verständnis:**  Ermutige dein Kind, sich zu erklären.
> * **Biete Sicherheit:**  Betone, dass du ihm die Zeit gut kontrollieren wirst und dass du ihn nicht verletzen wirst.
>
> **4. Deine eigene Erwartung:**
>
> * **Sei flexibel:**  Manchmal ist es gut, sich an die Bedürfnisse deines Kindes anzupassen.
> * **Sei geduldig:**  Es kann etwas dauern, bis du verstehst, was dein Kind braucht.
> * **Schätze die Zeit:**  Mitte Nacht ist eine tolle Chance, die Zeit zu genießen.
>
> **Wichtige Hinweise:**
>
> * **Keine Überstimulation:**  Stelle sicher, dass dein Kind nicht zu viel zu tun hat, während es schläft.
> * **Schlafroutine:**  Achte darauf, dass dein Kind eine gute Schlafroutine hat.
>
> **Zusammenfassend:**  Versuche, die Motivation deines Kindes zu verstehen, gemeinsam mit ihm über die Erwartungen zu sprechen und darauf zu achten, dass die Zeit gut kontrolliert wird.  Konzentriere dich auf Sicherheit und Vertrauen.
>
> **Was ist das für ein Kind?**  (Alter und Persönlichkeit deines Kindes) Wenn du mir ein paar Details zu deinem Kind gibst, kann ich dir vielleicht noch spezifischere Ratschläge geben. Zum Beispiel:
>
> * Wie alt ist dein Kind?
> * Was für eine Persönlichkeit hat dein Kind? (z.B. neugierig, ruhig, aufgeregt?)
> * Wie ist die Beziehung zwischen dir und deinem Kind?
>
> Q: Mein Kind - ein Junge - ist 3 Jahre alt. Wir schauen immer abends Fernsehen.
>
> A: Okay, das ist eine sehr gute Ausgangspunkt, um das Verhalten deines Jungen zu verstehen. Basierend auf den Informationen, die du gegeben hast, hier eine detailliertere Analyse und einige Vorschläge:
>
> **Was wir wissen:**
>
> * **Alter:** 3 Jahre alt – Das bedeutet, dass er noch in einer sehr frühen Entwicklungsphase ist.
> * **Konsum:** Immer abends Fernsehen – Das ist ein sehr wichtiger Punkt. Fernsehen hat einen großen Einfluss auf die Entwicklung von Kindern, da er die Welt in einer sehr begrenzten Perspektive sieht.
>
> **Warum das problematisch sein kann:**
>
> * **Zeitliche Beschränkung:** 3 Jahre alt ist eine Zeit, in der Kinder sehr aktiv und neugierig sind. Die ständige Präsenz von Fernsehen kann seine natürliche Neugierde stillen und ihn daran hindern, sich in andere zu hineinzuversetzen.
> * **Begrenzte Perspektive:** Kinder lernen durch Beobachtung und Nachahmung. Fernsehen zeigt ihnen oft nur eine begrenzte Perspektive auf die Welt.
> * **Verlust von "Freiraum":**  Ein wichtiger Teil der Entwicklung ist es, sich in eigene Erfahrungen einzufinden. Fernsehen nimmt ihm diesen Raum weg.
> * **Potenzielle Auswirkungen auf die Entwicklung:**  Langfristig kann eine hohe Bildschirmzeit negative Auswirkungen auf die soziale, emotionale und kognitive Entwicklung haben.
>
> **Was du tun kannst (mit Fokus auf dein Kind):**
>
> 1. **Achtsamkeit beim Fernsehen:**
>    * **Kurze Zeit:**  Stelle sicher, dass die Zeit, die er vor dem Fernsehen verbringt, begrenzt ist (z.B. 30-60 Minuten pro Tag).
>    * **Sichtbarkeit:**  Schalte den Fernseher aus, wenn er sich ansonsten in einen anderen Bereich oder eine andere Aktivität vertieft.
>    * **Konzentration:**  Biete ihm alternative Beschäftigungen an, die seine Interessen wecken und ihn beschäftigen.
>
> 2. **Förderung von sozialer Interaktion:**
>    * **Zeit für andere:**  Sorge für ausreichend Zeit, in der er mit anderen Kindern spielt und interagiert.
>    * **Gemeinsame Aktivitäten:**  Organisiere gemeinsame Spiele, Basteln oder andere Aktivitäten, die seine Interessen teilen.
>
> 3. **Entwicklung von Kreativität und Fantasie:**
>    * **Spielzeit:**  Biete ihm viel Spielzeit an, in der er seine Fantasie entwickeln kann.
>    * **Kreative Tätigkeiten:**  Ermutige ihn, zu malen, basteln, zeichnen oder andere kreative Tätigkeiten auszuüben.
>
> 4. **Ermutigung zu alternativen Aktivitäten:**
>    * **Freizeitaktivitäten:**  Sorge für eine vielfältige Auswahl an Freizeitaktivitäten, die seinen Interessen entsprechen.
>    * **Hobbys:**  Ermutige ihn, Hobbys zu finden, die ihn beschäftigen und ihm Freude bereiten.
>
> 5. **Besprechung:**
>     * **Warum Fernsehen?**  Frage ihn, warum er so viel Fernsehen mag. Vielleicht ist es ein Gefühl der Sicherheit oder des Vertrauens.
>     * **Was mag er an dem schauen?**  Versuche herauszufinden, was ihn an dem Programm interessiert.
>
> 6. **Beobachtung und Geduld:**
>    * **Wie reagiert er auf die Zeit?**  Achte darauf, wie er auf die Zeit reagiert.  Ist er frustriert, ängstlich oder ängstlich?
>    * **Geduld:**  Sei geduldig und versuche, ihn nicht zu verurteilen.  Er ist noch in einer Phase der Entwicklung.
>
> **Zusätzliche Tipps:**
>
> * **Ermutige ihn, seine eigenen Gedanken und Gefühle auszudrücken.**
> * **Sorge für ein entspanntes und liebevolles Umfeld.**
>
> **Wichtig:** Dein Ziel ist es, ihm zu helfen, seine Entwicklung in einem sicheren und unterstützenden Umfeld zu fördern.  Es geht nicht darum, ihn zu unterbrechen oder ihn zu kontrollieren, sondern darum, ihm die Möglichkeit zu geben, seine eigene Entwicklung zu erleben und zu lernen.
>
> Um dir noch besser helfen zu können, könntest du mir noch ein paar Details zu seinem Verhalten geben? Zum Beispiel:
>
> *   Welche Art von Fernsehen schaut er besonders gerne?
> *   Gibt es bestimmte Themen, die ihn besonders interessieren?

In addition, Gemma quotes its sources from Elternleben.

We should further evaluate Gemma.
