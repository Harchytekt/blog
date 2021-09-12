<?php $title = 'Troisième'; ?>

<?php ob_start(); ?>
<?php include("../postContent/3.php"); ?>
<?php $content = ob_get_clean(); ?>

<?php require('template.php'); ?>
