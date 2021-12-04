var map = {
    title: "Tenet",
    song: "env2",
    maker: "dododo73",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([0.44, -1.50982, 28.65]);
        a.y([61.92, -1.55976, -247.24], [0, 0, 0], [32.08, 19.9, 32.08], 2.0, 0);
        a.y([90.25, 0.0003, -51.81], [0, 0, 0], [59.38, 100, 59.38], 1, 0);
        a.y([23.98, 0, -53.11], [0, 0, 0], [59.38, 100, 59.38], 1, 0);
        a.p([104.26, -2.12994, -122.07], [0, 0, 0], [8.16, 0.48, 14.08], 2.0, 0);
        a.p([-1.88, -0.87988, -39.16], [0.59, 0, 0], [12, 0.48, 16.36], 3.0, 0);
        a.p([5.98, -0.87982, -77.29], [0.65, 0.05, 0.25], [16.8, 0.48, 13.84], 3.0, 0);
        a.p([-7.41, -0.39976, -50.47], [0, 0.1, 0], [8.94, 0.48, 13.14], 3.0, 0);
        a.p([39.15, -0.8797, -79.56], [-2.07, 0.24, -0.11], [12.6, 0.48, 16], 3.0, 0);
        a.p([57.03, -0.88, -50.61], [0, -0.11, 0], [15.06, 0.48, 13.78], 3.0, 0);
        a.p([73, -0.8799399999999999, -25.81], [1, -0.13, 0.01], [12, 0.48, 16.36], 3.0, 0);
        a.p([104.91, -0.87988, -27.13], [2.17, -0.21, -0.03], [12, 0.48, 16.36], 3.0, 0);
        a.p([118.61, -0.87982, -50.61], [0, 0.14, 0], [15.06, 0.48, 13.78], 3.0, 0);
        a.p([121.81, -0.87976, -82.43], [0, 0, 0], [7.72, 0.48, 28.36], 3.0, 0);
        a.p([113.03, -1.3697, -105.78], [0.65, -0.02, -0.01], [8.26, 0.48, 30.12], 3.0, 0);
        a.p([82.99, 7.32, -214.15], [0, 0, 0], [14.28, 0.48, 16.66], 3.0, 0);
        a.p([82.99, 5.31006, -229.26], [0, -0.26, 0], [14.28, 0.48, 16.66], 3.0, 0);
        a.p([82.99, 3.81012, -243.91], [0, 0, 0], [14.28, 0.48, 16.66], 3.0, 0);
        a.p([43.39, 3.81018, -239.91], [0, 0, 0], [9.02, 0.48, 25.42], 3.0, 0);
        a.p([64.8, 3.81024, -265.27], [0, 0, 0], [52.68, 0.48, 25.42], 3.0, 0);
        a.p([49.11, 0.4703, -205.38], [0.19, 0.16, 0.01], [9.02, 0.48, 54.84], 3.0, 0);
        a.p([78.98, -2.67, -148.47], [0.65, 0, 0], [8.38, 0.48, 83.38], 3.0, 0);
        a.c([82.88, 4.31006, -196.57], true);
        a.p([100.5, 1.32012, -122.07], [0, 0, -1.57], [8.16, 0.48, 14.08], 3.0, 0);
        a.p([0.35, -0.87982, -0.36], [0, 0, 0], [5.06, 0.48, 63.76], 3.0, 0);
        a.p([104.26, 4.08024, -150.81], [0, 0, 0], [5.38, 0.48, 16.66], 1, 0);
        a.p([93.7, 4.080299999999999, -166.84], [0.88, 0, 0], [5.38, 0.48, 28.36], 1, 0);
        a.p([82.99, 4.08, -182.71], [0, 0, 0], [5.38, 0.48, 16.66], 1, 0);
        a.p([82.99, 4.08006, -199.61], [0, 0, 0], [14.28, 0.48, 16.66], 1, 0);
        a.p([0.35, 2.08012, 12.58], [0, 0, 0], [8, 6, 6.46], 3.0, 0);
    },
    post: function() {
        a.m('Y0').unfreezeWorldMatrix();
        a.m('Y1').unfreezeWorldMatrix();
        a.m('Y2').unfreezeWorldMatrix();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -6.25) {
                    speed = default_speed * 1.2;
                    steer = default_steer * 1.1;
                    a.g(0, 0.1, 0);
                    this.section_id += 1
                }
                break;
            case 1:
                a.rot('Y1', 'y', -0.3);
                a.rot('Y2', 'y', 0.3);
                if (PZ < -114.37) {
                    speed = default_speed;
                    steer = default_steer;
                    a.g(0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -129.31) {
                    steer = default_steer * 0.3;
                    a.g(0, -0.3, 0);
                    this.section_id += 1
                }
                break;
            case 3:
                a.rot('Y0', 'y', -0.3);
                if (PZ < -141.45) {
                    steer = default_steer;
                    a.g(0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -206.98000000000002) {
                    speed = default_speed * 1.2;
                    steer = default_steer * 1.1;
                    a.g(0, -0.1, 0);
                    this.section_id += 1
                }
                break;
            case 5:
                a.rot('Y1', 'y', -0.3);
                a.rot('Y2', 'y', 0.3);
                if (PZ < -327.1) {
                    speed = default_speed;
                    steer = default_steer;
                    a.g(0, 1, 0);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('Y0', [61.92, -1.55976, -247.24], [0, 0, 0], [32.08, 19.9, 32.08]);
        a.re('Y1', [90.25, 0.0003, -51.81], [0, 0, 0], [59.38, 100, 59.38]);
        a.re('Y2', [23.98, 0, -53.11], [0, 0, 0], [59.38, 100, 59.38]);
        a.re('P0', [104.26, -2.12994, -122.07], [0, 0, 0], [8.16, 0.48, 14.08]);
        a.re('P1', [-1.88, -0.87988, -39.16], [0.59, 0, 0], [12, 0.48, 16.36]);
        a.re('P2', [5.98, -0.87982, -77.29], [0.65, 0.05, 0.25], [16.8, 0.48, 13.84]);
        a.re('P3', [-7.41, -0.39976, -50.47], [0, 0.1, 0], [8.94, 0.48, 13.14]);
        a.re('P4', [39.15, -0.8797, -79.56], [-2.07, 0.24, -0.11], [12.6, 0.48, 16]);
        a.re('P5', [57.03, -0.88, -50.61], [0, -0.11, 0], [15.06, 0.48, 13.78]);
        a.re('P6', [73, -0.8799399999999999, -25.81], [1, -0.13, 0.01], [12, 0.48, 16.36]);
        a.re('P7', [104.91, -0.87988, -27.13], [2.17, -0.21, -0.03], [12, 0.48, 16.36]);
        a.re('P8', [118.61, -0.87982, -50.61], [0, 0.14, 0], [15.06, 0.48, 13.78]);
        a.re('P9', [121.81, -0.87976, -82.43], [0, 0, 0], [7.72, 0.48, 28.36]);
        a.re('P10', [113.03, -1.3697, -105.78], [0.65, -0.02, -0.01], [8.26, 0.48, 30.12]);
        a.re('P11', [82.99, 7.32, -214.15], [0, 0, 0], [14.28, 0.48, 16.66]);
        a.re('P12', [82.99, 5.31006, -229.26], [0, -0.26, 0], [14.28, 0.48, 16.66]);
        a.re('P13', [82.99, 3.81012, -243.91], [0, 0, 0], [14.28, 0.48, 16.66]);
        a.re('P14', [43.39, 3.81018, -239.91], [0, 0, 0], [9.02, 0.48, 25.42]);
        a.re('P15', [64.8, 3.81024, -265.27], [0, 0, 0], [52.68, 0.48, 25.42]);
        a.re('P16', [49.11, 0.4703, -205.38], [0.19, 0.16, 0.01], [9.02, 0.48, 54.84]);
        a.re('P17', [78.98, -2.67, -148.47], [0.65, 0, 0], [8.38, 0.48, 83.38]);
        a.re('C0', [82.88, 4.31006, -196.57], [0, 0, 0], [2, 2, 2]);
        a.re('P18', [100.5, 1.32012, -122.07], [0, 0, -1.57], [8.16, 0.48, 14.08]);
        a.re('P19', [0.35, -0.87982, -0.36], [0, 0, 0], [5.06, 0.48, 63.76]);
        a.re('P20', [104.26, 4.08024, -150.81], [0, 0, 0], [5.38, 0.48, 16.66]);
        a.re('P21', [93.7, 4.080299999999999, -166.84], [0.88, 0, 0], [5.38, 0.48, 28.36]);
        a.re('P22', [82.99, 4.08, -182.71], [0, 0, 0], [5.38, 0.48, 16.66]);
        a.re('P23', [82.99, 4.08006, -199.61], [0, 0, 0], [14.28, 0.48, 16.66]);
        a.re('P24', [0.35, 2.08012, 12.58], [0, 0, 0], [8, 6, 6.46]);
    },
    physics_update: function() {},
    render_update: function() {}
}
