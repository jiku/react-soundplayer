import React from 'react';
import ClassNames from 'classnames';

let { PropTypes, Component } = React;

class Timer extends Component {
    static prettyTime(time) {
        let hours = Math.floor(time / 3600);
        let mins = '0' + Math.floor((time % 3600) / 60);
        let secs = '0' + Math.floor((time % 60));

        mins = mins.substr(mins.length - 2);
        secs = secs.substr(secs.length - 2);

        if (!isNaN(secs)) {
            if (hours) {
                return `${hours}:${mins}:${secs}`;
            } else {
                return `${mins}:${secs}`;
            }
        } else {
            return '00:00';
        }
    }

    render() {
        let { duration, currentTime, className, styles } = this.props;
        let classNames = ClassNames('sb-soundplayer-timer', className);

        return (
            <div className={classNames} style={styles}>
                {Timer.prettyTime(currentTime)} / {Timer.prettyTime(duration)}
            </div>
        );
    }
}

Timer.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,
    duration: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    currentTime: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

Timer.defaultProps = {
    duration: 0,
    currentTime: 0
};

export default Timer;
