import { Component } from '@angular/core';
import * as customBuild from './build/ckeditor';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ckeditor5Angular10';

  token: string =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEzNGVlM2UwLTFjM2EtMTFlYy1iNzRhLWE5MDZiYjIyODBjYyIsImlhdCI6MTYzODUxODY1NCwiZXhwIjoxNjM4NjA1MDU0fQ.YnBOFS_HDP1H26KJjl_-n_BP7yoIzfI6On_Y2McShfk';
  editor = customBuild;
  // editor = ClassicEditor;
  // content: string =
  //   '<figure class="image image_resized image-style-align-left" style="width:30.45%;"><img src="http://localhost:8000/sleepwell/images/encye/Linux.jpg"><figcaption><span style="font-family:Tahoma, Geneva, sans-serif;">Linux Logo</span></figcaption></figure><p><span style="font-family:Tahoma, Geneva, sans-serif;">Hello, world!</span></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Tahoma, Geneva, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sem justo. Pellentesque non metus in lacus sollicitudin ultricies. Morbi pretium vel tellus id faucibus. Vivamus tincidunt dui eget sapien egestas rutrum. Nam scelerisque est et risus tristique iaculis. Sed est est, luctus vel purus id, feugiat vestibulum mi. In erat diam, porttitor eget mattis sit amet, efficitur eget libero. Ut posuere eu elit id molestie. Quisque in dignissim sapien, sit amet egestas quam. Nam sit amet felis eu quam luctus accumsan. Duis eget mauris ex. Ut porttitor suscipit velit non fermentum. Pellentesque non mollis arcu.</span></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Tahoma, Geneva, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sem justo. Pellentesque non metus in lacus </span><a href="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Tahoma, Geneva, sans-serif;">sollicitudin </span></a><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Tahoma, Geneva, sans-serif;">ultricies. Morbi pretium vel tellus id faucibus. Vivamus tincidunt dui eget sapien egestas rutrum. Nam scelerisque est et risus tristique iaculis. Sed est est, luctus vel purus id, feugiat vestibulum mi. In erat diam, porttitor eget mattis sit amet, efficitur eget libero. Ut posuere eu elit id molestie. Quisque in dignissim sapien, sit amet egestas quam. Nam sit amet felis eu quam luctus accumsan. Duis eget mauris ex. Ut porttitor suscipit velit non fermentum. Pellentesque non mollis arcu.</span></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Tahoma, Geneva, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sem justo. Pellentesque non metus in lacus sollicitudin ultricies. Morbi pretium vel tellus id faucibus. Vivamus tincidunt dui eget sapien egestas rutrum. Nam scelerisque est et risus tristique iaculis. Sed est est, luctus vel purus id, feugiat vestibulum mi. In erat diam, porttitor eget mattis sit amet, efficitur eget libero. Ut posuere eu elit id molestie. Quisque in dignissim sapien, sit amet egestas quam. Nam sit amet felis eu quam luctus accumsan. Duis eget mauris ex. Ut porttitor suscipit velit non fermentum. Pellentesque non mollis arcu.</span></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Tahoma, Geneva, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sem justo. Pellentesque non metus in lacus sollicitudin ultricies. Morbi pretium vel tellus id faucibus. Vivamus tincidunt dui eget sapien egestas rutrum. Nam scelerisque est et risus tristique iaculis. Sed est est, luctus vel purus id, feugiat vestibulum mi. In erat diam, porttitor eget mattis sit amet, efficitur eget libero. Ut posuere eu elit id molestie. Quisque in dignissim sapien, sit amet egestas quam. Nam sit amet fe</span><img class="image_resized image-style-align-right" style="width:20.17%;" src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Tahoma, Geneva, sans-serif;">lis eu quam luctus accumsan. Duis eget mauris ex. Ut porttitor suscipit velit non fermentum. Pellentesque non mollis arcu.</span></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Tahoma, Geneva, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sem justo. Pellentesque non metus in lacus sollicitudin ultricies. Morbi pretium vel tellus id faucibus. Vivamus tincidunt dui eget sapien egestas rutrum. Nam scelerisque est et risus tristique iaculis. Sed est est, luctus vel purus id, feugiat vestibulum mi. In erat diam, porttitor eget mattis sit amet, efficitur eget libero. Ut posuere eu elit id molestie. Quisque in dignissim sapien, sit amet egestas quam. Nam sit amet felis eu quam luctus accumsan. Duis eget mauris ex. Ut porttitor suscipit velit non fermentum. Pellentesque non mollis arcu.</span></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Tahoma, Geneva, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sem justo. Pellentesque non metus in lacus sollicitudin ultricies. Morbi pretium vel tellus id faucibus. Vivamus tincidunt dui eget sapien egestas rutrum. Nam scelerisque est et risus tristique iaculis. Sed est est, luctus vel purus id, feugiat vestibulum mi. In erat diam, porttitor eget mattis sit amet, efficitur eget libero. Ut posuere eu elit id molestie. Quisque in dignissim sapien, sit amet egestas quam. Nam sit amet felis eu quam luctus accumsan. Duis eget mauris ex. Ut porttitor suscipit velit non fermentum. Pellentesque non mollis arcu.</span></p><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Tahoma, Geneva, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sem justo. Pellentesque non metus in lacus sollicitudin ultricies. Morbi pretium vel tellus id faucibus. Vivamus tincidunt dui eget sapien egestas rutrum. Nam scelerisque est et risus tristique iaculis. Sed est est, luctus vel purus id, feugiat vestibulum mi. In erat diam, porttitor eget mattis sit amet, efficitur eget libero. Ut posuere eu elit id molestie. Quisque in dignissim sapien, sit amet egestas quam. Nam sit amet felis eu quam luctus accumsan. Duis eget mauris ex. Ut porttitor suscipit velit non fermentum. Pellentesque non mollis arcu.</span></p><p><img src="https://ckeditor.com/assets/images/header/ckeditor-5-0d286a7dcd.png"></p>';
  content: string = '';
  config = {
    // toolbar: {
    //   items: [
    //     'heading',
    //     '|',
    //     'fontfamily',
    //     'fontsize',
    //     'alignment',
    //     'fontColor',
    //     'fontBackgroundColor',
    //     '|',
    //     'bold',
    //     'italic',
    //     'strikethrough',
    //     'underline',
    //     'subscript',
    //     'superscript',
    //     '|',
    //     'link',
    //     '|',
    //     'outdent',
    //     'indent',
    //     '|',
    //     'bulletedList',
    //     '-',
    //     'numberedList',
    //     'todoList',
    //     '|',
    //     // 'code',
    //     // 'codeBlock',
    //     '|',
    //     'insertTable',
    //     '|',
    //     'imageUpload',
    //     'blockQuote',
    //     '|',
    //     'todoList',
    //     'undo',
    //     'redo',
    //   ],
    //   shouldNotGroupWhenFull: true,
    // },
    // image: {
    //   // Configure the available styles.
    //   styles: ['alignLeft', 'alignCenter', 'alignRight'],

    //   // Configure the available image resize options.
    //   resizeOptions: [
    //     {
    //       name: 'resizeImage:original',
    //       label: 'Original',
    //       value: null,
    //     },
    //     {
    //       name: 'resizeImage:50',
    //       label: '25%',
    //       value: '25',
    //     },
    //     {
    //       name: 'resizeImage:50',
    //       label: '50%',
    //       value: '50',
    //     },
    //     {
    //       name: 'resizeImage:75',
    //       label: '75%',
    //       value: '75',
    //     },
    //   ],

    //   // You need to configure the image toolbar, too, so it shows the new style
    //   // buttons as well as the resize buttons.
    //   toolbar: [
    //     'imageStyle:alignLeft',
    //     'imageStyle:alignCenter',
    //     'imageStyle:alignRight',
    //     '|',
    //     'ImageResize',
    //     '|',
    //     'imageTextAlternative',
    //   ],
    // },
    simpleUpload: {
      //  The URL that the images are uploaded to.
      uploadUrl: 'http://localhost:8000/api/v1/image/imageUpload',
      headers: {
        Authorization: this.token,
      },

      // Enable the XMLHttpRequest.withCredentials property.
    },
    language: 'en',
  };

  contentChange() {
    console.log(this.content);
  }
}
