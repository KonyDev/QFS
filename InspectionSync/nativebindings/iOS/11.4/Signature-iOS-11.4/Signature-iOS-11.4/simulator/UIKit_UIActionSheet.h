#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIActionSheet_symbols(JSContext*);
@protocol UIActionSheetInstanceExports<JSExport>
@property (nonatomic) NSInteger cancelButtonIndex;
@property (copy,nonatomic) NSString * title;
@property (readonly,nonatomic) NSInteger firstOtherButtonIndex;
@property (readonly,nonatomic) NSInteger numberOfButtons;
@property (getter=isVisible,readonly,nonatomic) BOOL visible;
@property (nonatomic) UIActionSheetStyle actionSheetStyle;
@property (nonatomic,weak) id delegate;
@property (nonatomic) NSInteger destructiveButtonIndex;
-(void) showFromToolbar: (UIToolbar *) view ;
-(void) showFromTabBar: (UITabBar *) view ;
-(void) showFromBarButtonItem: (UIBarButtonItem *) item animated: (BOOL) animated ;
JSExportAs(initWithTitleDelegateCancelButtonTitleDestructiveButtonTitleOtherButtonTitles,
-(id) jsinitWithTitle: (NSString *) title delegate: (id) delegate cancelButtonTitle: (NSString *) cancelButtonTitle destructiveButtonTitle: (NSString *) destructiveButtonTitle otherButtonTitles: (NSString *) otherButtonTitles arguments: (NSArray *) args );
-(void) showInView: (UIView *) view ;
-(NSString *) buttonTitleAtIndex: (NSInteger) buttonIndex ;
-(void) dismissWithClickedButtonIndex: (NSInteger) buttonIndex animated: (BOOL) animated ;
-(void) showFromRect: (CGRect) rect inView: (UIView *) view animated: (BOOL) animated ;
-(NSInteger) addButtonWithTitle: (NSString *) title ;
@end
@protocol UIActionSheetClassExports<JSExport>
@end
@protocol UIActionSheetDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) actionSheet: (UIActionSheet *) actionSheet clickedButtonAtIndex: (NSInteger) buttonIndex ;
-(void) actionSheetCancel: (UIActionSheet *) actionSheet ;
-(void) actionSheet: (UIActionSheet *) actionSheet didDismissWithButtonIndex: (NSInteger) buttonIndex ;
-(void) actionSheet: (UIActionSheet *) actionSheet willDismissWithButtonIndex: (NSInteger) buttonIndex ;
-(void) willPresentActionSheet: (UIActionSheet *) actionSheet ;
-(void) didPresentActionSheet: (UIActionSheet *) actionSheet ;
@end
@protocol UIActionSheetDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop