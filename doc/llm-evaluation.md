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
