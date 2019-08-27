#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIToolbar_symbols(JSContext*);
@protocol UIToolbarInstanceExports<JSExport, UIBarPositioningInstanceExports_>
@property (copy,nonatomic) NSArray * items;
@property (nonatomic) UIBarStyle barStyle;
@property (nonatomic,strong) UIColor * barTintColor;
@property (nonatomic,strong) UIColor * tintColor;
@property (nonatomic,weak) id delegate;
@property (getter=isTranslucent,assign,nonatomic) BOOL translucent;
-(void) setItems: (NSArray *) items animated: (BOOL) animated ;
-(UIImage *) shadowImageForToolbarPosition: (UIBarPosition) topOrBottom ;
-(void) setBackgroundImage: (UIImage *) backgroundImage forToolbarPosition: (UIBarPosition) topOrBottom barMetrics: (UIBarMetrics) barMetrics ;
-(UIImage *) backgroundImageForToolbarPosition: (UIBarPosition) topOrBottom barMetrics: (UIBarMetrics) barMetrics ;
-(void) setShadowImage: (UIImage *) shadowImage forToolbarPosition: (UIBarPosition) topOrBottom ;
@end
@protocol UIToolbarClassExports<JSExport, UIBarPositioningClassExports_>
@end
@protocol UIToolbarDelegateInstanceExports_<JSExport, UIBarPositioningDelegateInstanceExports_>
@end
@protocol UIToolbarDelegateClassExports_<JSExport, UIBarPositioningDelegateClassExports_>
@end
#pragma clang diagnostic pop