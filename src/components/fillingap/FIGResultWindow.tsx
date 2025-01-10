import { coolCorrectPhrases, coolIncorrectPhrases } from '@c/cool-pfrases';
import { IFIGResultHOC } from '@t/components/fig-result';
import Button from '@ui/Button';
import { normalizeAndCompare } from '@ut/compareAlgorythms';
import { randomNumber } from '@ut/generateRandom';
import styles from "@s/components/fig/fig-result-window.module.css";
import React, { FC } from 'react';

const COLORS = {
    CORRECT: 'var(--tc-correct-ans)',
    INCORRECT: 'var(--tc-incorrect-ans)'
} as const;

type ResultStatus = 'correct' | 'incorrect';


const FIGResultWindow: FC<IFIGResultHOC> = ({
    dish,
    answer,
    handleNextQuestion
}) => {
    const isAnswerCorrect = normalizeAndCompare(dish.name, answer);
    const status: ResultStatus = isAnswerCorrect ? 'correct' : 'incorrect';

    const getResultText = (status: ResultStatus): string => {
        const phrases = status === 'correct' ? coolCorrectPhrases : coolIncorrectPhrases;
        return phrases[randomNumber(0, phrases.length)];
    };

    const getResultColor = (status: ResultStatus): string => {
        return status === 'correct' ? COLORS.CORRECT : COLORS.INCORRECT;
    };


    return (
        <>
            <div className={styles.text}>
                <p
                    className={styles.correctIncorrect}
                    style={{ backgroundColor: getResultColor(status) }}>
                    {getResultText(status)}
                </p>
                <p className={styles.rightAnswer}>Правильна відповідь: {dish.name}</p>
            </div>

            <div className={styles.buttons}>
                <Button
                    className='bg-white'
                    is='button' action={handleNextQuestion}
                    text="Наступне питання"
                    to={false}
                />
                <Button
                    className='bg-white'
                    is='button'
                    action={handleNextQuestion}
                    text="Розкажи більше про цю страву"
                    to={false}
                />
            </div>
        </>
    )
}

export default FIGResultWindow