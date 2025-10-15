---
title: "Cargo Dev Tools"
---     

[Bacon - Run Cargo in loop](https://github.com/Canop/bacon)
![Bacon - Run Cargo in loop](https://github.com/Canop/bacon/raw/main/doc/screenshot.png)

```
cargo install --locked bacon
```

[binstall - Install rust binaries](https://github.com/cargo-bins/cargo-binstall)
```
$ cargo install cargo-binstall

$ cargo binstall radio-sx128x@0.14.1-alpha.5
 INFO resolve: Resolving package: 'radio-sx128x@=0.14.1-alpha.5'
 WARN The package radio-sx128x v0.14.1-alpha.5 (x86_64-unknown-linux-gnu) has been downloaded from github.com
 INFO This will install the following binaries:
 INFO   - sx128x-util (sx128x-util-x86_64-unknown-linux-gnu -> /home/.cargo/bin/sx128x-util)
Do you wish to continue? [yes]/no
? yes
 INFO Installing binaries...
 INFO Done in 2.838798298s
```

[cargo-edit - edit Cargo.toml directly](https://github.com/killercup/cargo-edit)
```
$ cargo install cargo-edit
$ cargo upgrade
```

[nextest - better cargo-test](https://github.com/nextest-rs/nextest)

```
$ cargo install --locked cargo-nextest
$ cargo nextest run
------------
 Nextest run ID 1f79aa0d-4ec8-4a5c-aa83-5e8dc2f36573 with nextest profile: default
    Starting 14 tests across 3 binaries (177 tests skipped)
        PASS [   0.005s] nextest-runner reporter::tests::no_capture_settings
        PASS [   0.004s] nextest-runner reporter::tests::test_final_warnings
        PASS [   0.004s] nextest-runner reporter::tests::test_progress_bar_prefix
        PASS [   0.010s] nextest-runner reporter::tests::on_test_finished_store_final_3
        PASS [   0.011s] nextest-runner reporter::tests::on_test_finished_store_final_2
        PASS [   0.011s] nextest-runner reporter::tests::on_test_finished_store_final_1
        PASS [   0.011s] nextest-runner reporter::tests::on_test_finished_with_interrupt
        PASS [   0.013s] nextest-runner reporter::tests::on_test_finished_dont_show_immediate
        PASS [   0.013s] nextest-runner reporter::tests::on_test_finished_show_immediate
        PASS [   0.012s] nextest-runner reporter::tests::on_test_finished_write_status_line
        PASS [   0.014s] nextest-runner reporter::tests::on_test_finished_dont_store_final
        PASS [   0.014s] nextest-runner reporter::tests::test_write_skip_counts
        PASS [   0.018s] nextest-runner reporter::tests::on_test_finished_dont_write_status_line
        PASS [   0.019s] nextest-runner reporter::tests::on_test_finished_store_final_4
------------
     Summary [   0.021s] 14 tests run: 14 passed, 177 skipped
```

[Rust-Owl - VsCode rust-borrow and lifetime visualizer](https://github.com/cordx56/rustowl)
![Rust-Owl - VsCode rust-borrow and lifetime visualizer](https://github.com/cordx56/rustowl/raw/main/docs/assets/readme-screenshot-3.png)

