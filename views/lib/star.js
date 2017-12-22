import MovingObject from './moving_object';

export default class Star extends MovingObject {
	constructor(options) {
		super(options);

		this.x = this.randomPoint();
		this.y = this.randomPoint();

		this.radius = Math.random() * 3;
		this.shade = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
	}

	update(vely) {
		this.y += vely;

		if (this.y > this.originPoint) {
			this.y = -this.originPoint;
			this.x = this.randomPoint();
		} else if (this.y < -this.originPoint) {
			this.y = this.originPoint;
			this.x = this.randomPoint();
		}

		if (this.x > this.originPoint) {
			this.x = -this.originPoint;
			this.y = this.randomPoint();
		} else if (this.x < -this.originPoint) {
			this.x = this.originPoint;
			this.y = this.randomPoint();
		}
	}

	show(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.shade;
		ctx.arc( this.x, this.y, this.radius, 0, Math.PI * 2 );
		ctx.fill();
		ctx.closePath();
	}

	randomPoint() {
		return (
			( Math.random() * -this.originPoint )
						+ ( this.originPoint * Math.random() )
		);
	}
};