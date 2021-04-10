export const getIsQuizComplete = ({prevState}) => {
    const { currentIndex, questions } = prevState;
    if(currentIndex === questions.length - 1) {
        return true;
    }

    return false
}
