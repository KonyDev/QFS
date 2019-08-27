#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIWindow_symbols(JSContext*);
@protocol UIWindowInstanceExports<JSExport>
@property (nonatomic,strong) UIScreen * screen;
@property (getter=isKeyWindow,readonly,nonatomic) BOOL keyWindow;
@property (nonatomic) UIWindowLevel windowLevel;
@property (nonatomic,strong) UIViewController * rootViewController;
-(CGPoint) convertPoint: (CGPoint) point fromWindow: (UIWindow *) window ;
-(CGRect) convertRect: (CGRect) rect fromWindow: (UIWindow *) window ;
-(void) makeKeyWindow;
-(void) becomeKeyWindow;
-(CGPoint) convertPoint: (CGPoint) point toWindow: (UIWindow *) window ;
-(void) resignKeyWindow;
-(CGRect) convertRect: (CGRect) rect toWindow: (UIWindow *) window ;
-(void) makeKeyAndVisible;
-(void) sendEvent: (UIEvent *) event ;
@end
@protocol UIWindowClassExports<JSExport>
@end
#pragma clang diagnostic pop