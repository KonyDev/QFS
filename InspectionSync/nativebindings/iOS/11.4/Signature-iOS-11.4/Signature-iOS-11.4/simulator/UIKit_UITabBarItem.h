#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITabBarItem_symbols(JSContext*);
@protocol UITabBarItemSpringLoadingCategoryInstanceExports<JSExport, UISpringLoadedInteractionSupportingInstanceExports_>
@end
@protocol UITabBarItemSpringLoadingCategoryClassExports<JSExport, UISpringLoadedInteractionSupportingClassExports_>
@end
@protocol UITabBarItemInstanceExports<JSExport>
@property (assign,readwrite,nonatomic) UIOffset titlePositionAdjustment;
@property (copy,nonatomic) NSString * badgeValue;
@property (readwrite,copy,nonatomic) UIColor * badgeColor;
@property (nonatomic,strong) UIImage * selectedImage;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(NSDictionary *) badgeTextAttributesForState: (UIControlState) state ;
JSExportAs(initWithTabBarSystemItemTag,
-(id) jsinitWithTabBarSystemItem: (UITabBarSystemItem) systemItem tag: (NSInteger) tag );
JSExportAs(initWithTitleImageSelectedImage,
-(id) jsinitWithTitle: (NSString *) title image: (UIImage *) image selectedImage: (UIImage *) selectedImage );
-(UIImage *) finishedSelectedImage;
-(id) jsinit;
JSExportAs(initWithTitleImageTag,
-(id) jsinitWithTitle: (NSString *) title image: (UIImage *) image tag: (NSInteger) tag );
-(UIImage *) finishedUnselectedImage;
-(void) setFinishedSelectedImage: (UIImage *) selectedImage withFinishedUnselectedImage: (UIImage *) unselectedImage ;
-(void) setBadgeTextAttributes: (NSDictionary *) textAttributes forState: (UIControlState) state ;
@end
@protocol UITabBarItemClassExports<JSExport>
@end
#pragma clang diagnostic pop