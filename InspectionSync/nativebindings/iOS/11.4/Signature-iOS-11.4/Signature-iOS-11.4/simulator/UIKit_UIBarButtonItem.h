#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIBarButtonItem_symbols(JSContext*);
@protocol UIBarButtonItemSpringLoadingCategoryInstanceExports<JSExport, UISpringLoadedInteractionSupportingInstanceExports_>
@end
@protocol UIBarButtonItemSpringLoadingCategoryClassExports<JSExport, UISpringLoadedInteractionSupportingClassExports_>
@end
@protocol UIBarButtonItemInstanceExports<JSExport, NSCodingInstanceExports_>
@property (nonatomic) UIBarButtonItemStyle style;
@property (nonatomic,weak) id target;
@property (nonatomic,strong) UIColor * tintColor;
@property (nonatomic,strong) __kindof UIView * customView;
@property (nonatomic) CGFloat width;
@property (getter=getJsAction,setter=setJsAction:) NSString* jsaction;
@property (copy,nonatomic) NSSet * possibleTitles;
-(UIImage *) backgroundImageForState: (UIControlState) state style: (UIBarButtonItemStyle) style barMetrics: (UIBarMetrics) barMetrics ;
-(CGFloat) backgroundVerticalPositionAdjustmentForBarMetrics: (UIBarMetrics) barMetrics ;
-(void) setBackButtonTitlePositionAdjustment: (UIOffset) adjustment forBarMetrics: (UIBarMetrics) barMetrics ;
-(void) setBackButtonBackgroundVerticalPositionAdjustment: (CGFloat) adjustment forBarMetrics: (UIBarMetrics) barMetrics ;
-(UIImage *) backButtonBackgroundImageForState: (UIControlState) state barMetrics: (UIBarMetrics) barMetrics ;
JSExportAs(initWithBarButtonSystemItemTargetAction,
-(id) jsinitWithBarButtonSystemItem: (UIBarButtonSystemItem) systemItem target: (id) target action: (NSString *) action );
-(UIOffset) backButtonTitlePositionAdjustmentForBarMetrics: (UIBarMetrics) barMetrics ;
-(CGFloat) backButtonBackgroundVerticalPositionAdjustmentForBarMetrics: (UIBarMetrics) barMetrics ;
JSExportAs(initWithImageStyleTargetAction,
-(id) jsinitWithImage: (UIImage *) image style: (UIBarButtonItemStyle) style target: (id) target action: (NSString *) action );
-(id) jsinit;
JSExportAs(initWithTitleStyleTargetAction,
-(id) jsinitWithTitle: (NSString *) title style: (UIBarButtonItemStyle) style target: (id) target action: (NSString *) action );
-(void) setBackgroundVerticalPositionAdjustment: (CGFloat) adjustment forBarMetrics: (UIBarMetrics) barMetrics ;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithImageLandscapeImagePhoneStyleTargetAction,
-(id) jsinitWithImage: (UIImage *) image landscapeImagePhone: (UIImage *) landscapeImagePhone style: (UIBarButtonItemStyle) style target: (id) target action: (NSString *) action );
-(UIImage *) backgroundImageForState: (UIControlState) state barMetrics: (UIBarMetrics) barMetrics ;
-(void) setTitlePositionAdjustment: (UIOffset) adjustment forBarMetrics: (UIBarMetrics) barMetrics ;
-(void) setBackgroundImage: (UIImage *) backgroundImage forState: (UIControlState) state style: (UIBarButtonItemStyle) style barMetrics: (UIBarMetrics) barMetrics ;
-(UIOffset) titlePositionAdjustmentForBarMetrics: (UIBarMetrics) barMetrics ;
-(void) setBackButtonBackgroundImage: (UIImage *) backgroundImage forState: (UIControlState) state barMetrics: (UIBarMetrics) barMetrics ;
-(void) setBackgroundImage: (UIImage *) backgroundImage forState: (UIControlState) state barMetrics: (UIBarMetrics) barMetrics ;
JSExportAs(initWithCustomView,
-(id) jsinitWithCustomView: (UIView *) customView );
@end
@protocol UIBarButtonItemClassExports<JSExport, NSCodingClassExports_>
@end
#pragma clang diagnostic pop