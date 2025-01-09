import { IFIGTest } from '@t/components/fig-test';
import Button from '@ui/Button';
import React from 'react';
import styles from "@s/components/fig/fig-test.module.css";
import InputField from '@ui/InputField';

const FIGTest = ({ dish, changeQuestion, answer, setAnswer }: IFIGTest) => {
    const answerQuestion = () => {
        changeQuestion();
        setAnswer("");
    }

    const skipQuestion = () => {
        changeQuestion();
        setAnswer("");
    }

    return (
        <div className={styles.main}>
            <div className={styles.text}>
                {dish.ingredients !== "" &&
                    <div className={styles.ingridientsDiv}>
                        <p className={styles.ingridientsHeader}>Склад: </p>
                        <p className={styles.ingridients}>{dish.ingredients}</p>
                    </div>
                }
                {dish.description !== "" &&
                    <div className={styles.descriptionDiv}>
                        <p className={styles.descriptionHeader}>Опис: </p>
                        <p className={styles.description}>{dish.description}</p>
                    </div>
                }
            </div>
            <div className={styles.fieldButton}>
                <InputField value={answer} setValue={setAnswer} placehilder='Назву вводити ось тут' />
                <div className={styles.buttons}>
                    <Button is='button' text='Відповісти' action={answerQuestion} to={false} />
                    <Button is='button' text='Пропустити' action={skipQuestion} to={false} />
                </div>
            </div>
        </div>
    )
}

export default FIGTest