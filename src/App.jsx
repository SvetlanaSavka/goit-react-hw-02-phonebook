import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notiflix from 'components/Notiflix/Notiflix';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleMethod = method => {
    this.setState(prevState => ({
      [method]: prevState[method] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const result = this.countTotalFeedback();
    const percentage = (100 * good) / result;
    return Math.round(percentage);
  };

  render() {
    console.log(Object.keys(this.state));
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleMethod}
          />
        </Section>
        {total === 0 ? (
          <Notiflix message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              Positive
              feedback={this.countPositiveFeedbackPercentage}
            />
          </Section>
        )}
      </>
    );
  }
}
