#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIMenuController_symbols(JSContext*);
@protocol UIMenuControllerInstanceExports<JSExport>
@property (getter=isMenuVisible,nonatomic) BOOL menuVisible;
@property (nonatomic) UIMenuControllerArrowDirection arrowDirection;
@property (copy,nonatomic) NSArray * menuItems;
@property (readonly,nonatomic) CGRect menuFrame;
-(void) setMenuVisible: (BOOL) menuVisible animated: (BOOL) animated ;
-(void) update;
-(void) setTargetRect: (CGRect) targetRect inView: (UIView *) targetView ;
@end
@protocol UIMenuControllerClassExports<JSExport>
+(UIMenuController *) sharedMenuController;
@end
@protocol UIMenuItemInstanceExports<JSExport>
@property (getter=getJsAction,setter=setJsAction:) NSString* jsaction;
@property (copy,nonatomic) NSString * title;
JSExportAs(initWithTitleAction,
-(id) jsinitWithTitle: (NSString *) title action: (NSString *) action );
@end
@protocol UIMenuItemClassExports<JSExport>
@end
#pragma clang diagnostic pop