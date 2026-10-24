import type {JSX} from 'react'

type HeaderProps = {
    maxWrongGuesses: number
}

export default function Header({ maxWrongGuesses }: HeaderProps):JSX.Element {
    return (
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word within {maxWrongGuesses} attempts to keep the
                programming world safe from Assembly!</p>
        </header>
    )
}
