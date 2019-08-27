#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPress_symbols(JSContext*);
@protocol UIPressInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSArray * gestureRecognizers;
@property (readonly,nonatomic) NSTimeInterval timestamp;
@property (readonly,nonatomic,strong) UIResponder * responder;
@property (readonly,nonatomic,strong) UIWindow * window;
@property (readonly,nonatomic) UIPressPhase phase;
@property (readonly,nonatomic) CGFloat force;
@property (readonly,nonatomic) UIPressType type;
@end
@protocol UIPressClassExports<JSExport>
@end
#pragma clang diagnostic pop